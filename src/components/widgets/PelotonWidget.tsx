"use client";

import { useState } from "react";
import { useTheme } from "@/components/ThemeProvider";
import pelotonData from "@/data/peloton.json";

const TYPE_ICONS: Record<string, string> = {
  cycling: "🚴‍♀️",
  strength: "🏋️‍♀️",
  yoga: "🧘‍♀️",
  stretching: "🤸‍♀️",
  running: "🏃‍♀️",
  walking: "🚶‍♀️",
  meditation: "🧠",
  cardio: "❤️‍🔥",
};

type Tab = "recent" | "instructors";

export default function PelotonWidget() {
  const theme = useTheme();
  const [tab, setTab] = useState<Tab>("recent");

  const workouts = pelotonData.recentWorkouts.slice(0, 5);
  const instructors = pelotonData.favoriteInstructors;

  return (
    <div>
      {/* Tab toggle */}
      <div className="mb-4 flex gap-1 rounded-full p-0.5" style={{ background: `${theme.accent}10` }}>
        {(["recent", "instructors"] as Tab[]).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className="flex-1 rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider transition-all"
            style={{
              background: tab === t ? theme.cardBg : "transparent",
              color: tab === t ? theme.text : theme.muted,
              border: tab === t ? `1px solid ${theme.accent}25` : "1px solid transparent",
            }}
          >
            {t === "recent" ? "Recent" : "Top trainers"}
          </button>
        ))}
      </div>

      {/* Recent workouts */}
      {tab === "recent" && (
        <ul className="flex flex-col gap-2.5">
          {workouts.map((w) => (
            <li
              key={w.id}
              className="flex items-center gap-3 rounded-xl px-3 py-2.5"
              style={{
                background: `${theme.accent}08`,
                border: `1px solid ${theme.accent}10`,
              }}
            >
              <span className="text-lg">{TYPE_ICONS[w.type] || "💪"}</span>
              <div className="min-w-0 flex-1">
                <p
                  className="truncate font-serif text-sm font-bold"
                  style={{ color: theme.text, margin: 0 }}
                >
                  {w.title}
                </p>
                <p
                  className="font-sans text-[11px]"
                  style={{ color: theme.muted, margin: 0 }}
                >
                  {w.duration} min · {w.date}
                  {w.calories ? ` · ${w.calories} cal` : ""}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* Favorite instructors */}
      {tab === "instructors" && (
        <ul className="flex flex-col gap-2.5">
          {instructors.map((inst, i) => (
            <li
              key={inst.name}
              className="flex items-center gap-3 rounded-xl px-3 py-2.5"
              style={{
                background: `${theme.accent}08`,
                border: `1px solid ${theme.accent}10`,
              }}
            >
              {/* Rank badge */}
              <span
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[11px] font-bold"
                style={{
                  background: i === 0 ? `${theme.accent}25` : `${theme.accent}12`,
                  color: theme.text,
                }}
              >
                {i + 1}
              </span>
              <div className="min-w-0 flex-1">
                <p
                  className="truncate font-serif text-sm font-bold"
                  style={{ color: theme.text, margin: 0 }}
                >
                  {inst.name}
                </p>
                <p
                  className="font-sans text-[11px]"
                  style={{ color: theme.muted, margin: 0 }}
                >
                  {inst.count} {inst.count === 1 ? "workout" : "workouts"} recently
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* Workout type summary */}
      <div className="mt-4 flex flex-wrap gap-1.5">
        {Object.entries(pelotonData.workoutTypes).map(([type, count]) => (
          <span
            key={type}
            className="rounded-full px-2.5 py-1 text-[10px] font-semibold capitalize"
            style={{
              background: `${theme.accent}12`,
              color: theme.muted,
            }}
          >
            {TYPE_ICONS[type] || "💪"} {type} × {count}
          </span>
        ))}
      </div>
    </div>
  );
}
