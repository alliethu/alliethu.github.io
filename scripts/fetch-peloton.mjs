#!/usr/bin/env node

/**
 * Fetches recent Peloton workout data and saves it as a static JSON file.
 *
 * Usage:
 *   PELOTON_USERNAME=you@email.com PELOTON_PASSWORD=secret node scripts/fetch-peloton.mjs
 *
 * The output is written to src/data/peloton.json and committed to the repo
 * so the site can render it statically without runtime API calls.
 */

const BASE = "https://api.onepeloton.com";
const OUT_PATH = new URL("../src/data/peloton.json", import.meta.url);

const username = process.env.PELOTON_USERNAME;
const password = process.env.PELOTON_PASSWORD;

if (!username || !password) {
  console.error(
    "Set PELOTON_USERNAME and PELOTON_PASSWORD environment variables."
  );
  process.exit(1);
}

async function api(path, cookie) {
  const res = await fetch(`${BASE}${path}`, {
    headers: { Cookie: cookie, "Content-Type": "application/json" },
  });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText} — ${path}`);
  return res.json();
}

async function main() {
  // ── Authenticate ──────────────────────────────────────────────────────
  const authRes = await fetch(`${BASE}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username_or_email: username, password }),
  });

  if (!authRes.ok) {
    console.error("Auth failed:", authRes.status, await authRes.text());
    process.exit(1);
  }

  const authData = await authRes.json();
  const userId = authData.user_id;
  const sessionId = authData.session_id;
  const cookie = `peloton_session_id=${sessionId}`;

  console.log(`Authenticated as user ${userId}`);

  // ── Fetch recent workouts (last 20) ───────────────────────────────────
  const workoutsRes = await api(
    `/api/user/${userId}/workouts?limit=20&sort_by=-created_at`,
    cookie
  );

  const workouts = [];
  const instructorIds = new Set();

  for (const w of workoutsRes.data) {
    const detail = await api(`/api/workout/${w.id}`, cookie);
    const ride = detail.ride || detail.peloton?.ride || {};

    const instructorId = ride.instructor_id;
    if (instructorId) instructorIds.add(instructorId);

    workouts.push({
      id: w.id,
      type: w.fitness_discipline || "unknown",
      title: ride.title || w.fitness_discipline || "Workout",
      instructorId: instructorId || null,
      duration: Math.round((w.end_time - w.start_time) / 60),
      date: new Date(w.start_time * 1000).toISOString().slice(0, 10),
      calories: w.total_work ? Math.round(w.total_work / 1000) : null,
      totalOutput: detail.total_work ? Math.round(detail.total_work) : null,
    });
  }

  // ── Fetch instructor details ──────────────────────────────────────────
  const instructors = {};
  for (const id of instructorIds) {
    const data = await api(`/api/instructor/${id}`, cookie);
    instructors[id] = {
      name: data.name,
      image: data.image_url,
    };
  }

  // ── Compute favorite instructors (by workout count) ───────────────────
  const instructorCounts = {};
  for (const w of workouts) {
    if (w.instructorId && instructors[w.instructorId]) {
      const name = instructors[w.instructorId].name;
      instructorCounts[name] = (instructorCounts[name] || 0) + 1;
    }
  }
  const favoriteInstructors = Object.entries(instructorCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([name, count]) => {
      const entry = Object.values(instructors).find((i) => i.name === name);
      return { name, count, image: entry?.image || null };
    });

  // ── Compute workout type breakdown ────────────────────────────────────
  const typeCounts = {};
  for (const w of workouts) {
    const label = w.type.replace(/_/g, " ");
    typeCounts[label] = (typeCounts[label] || 0) + 1;
  }

  // ── Build output ──────────────────────────────────────────────────────
  const output = {
    fetchedAt: new Date().toISOString(),
    totalWorkouts: workoutsRes.total,
    recentWorkouts: workouts,
    favoriteInstructors,
    workoutTypes: typeCounts,
  };

  const { mkdir, writeFile } = await import("node:fs/promises");
  const { dirname } = await import("node:path");
  const { fileURLToPath } = await import("node:url");

  const outPath = fileURLToPath(OUT_PATH);
  await mkdir(dirname(outPath), { recursive: true });
  await writeFile(outPath, JSON.stringify(output, null, 2) + "\n");
  console.log(`Wrote ${workouts.length} workouts to ${outPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
