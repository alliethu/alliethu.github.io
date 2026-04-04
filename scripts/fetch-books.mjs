#!/usr/bin/env node

/**
 * Fetches book cover images from Open Library and saves metadata to a static JSON file.
 *
 * Usage:
 *   node scripts/fetch-books.mjs
 *
 * Reads the book list from this script, fetches cover URLs and metadata from
 * Open Library, and writes the result to src/data/books.json.
 */

// ── Your reading shelf — edit this list when you finish/start a book ────────
const BOOKS = [
  { title: "A Court of Wings and Ruin", author: "Sarah J. Maas" },
  { title: "A Court of Mist and Fury", author: "Sarah J. Maas" },
  { title: "A Court of Thorns and Roses", author: "Sarah J. Maas" },
  { title: "Matched", author: "Ally Condie" },
  { title: "A Novel..Funny Story", author: "Emily Henry" },
  { title: "Blood Circus", author: "Camila Victoire" },
  { title: "The Love That Split the World", author: "Emily Henry" },
  { title: "Great Big Beautiful Life", author: "Emily Henry" },
  { title: "Sweet Reckoning", author: "Wendy Higgins" },
];

const OUT_PATH = new URL("../src/data/books.json", import.meta.url);

async function searchBook(title, author) {
  const query = encodeURIComponent(`${title} ${author}`);
  const res = await fetch(
    `https://openlibrary.org/search.json?q=${query}&limit=3&fields=key,title,author_name,cover_i,first_publish_year,isbn`
  );
  if (!res.ok) {
    console.warn(`  Search failed for "${title}": ${res.status}`);
    return null;
  }
  const data = await res.json();
  if (!data.docs || data.docs.length === 0) {
    console.warn(`  No results for "${title}"`);
    return null;
  }

  // Pick the first result with a cover
  const match = data.docs.find((d) => d.cover_i) || data.docs[0];
  return match;
}

function getCoverUrl(coverId, size = "M") {
  if (!coverId) return null;
  // Sizes: S (small), M (medium), L (large)
  return `https://covers.openlibrary.org/b/id/${coverId}-${size}.jpg`;
}

async function main() {
  const results = [];

  for (const book of BOOKS) {
    console.log(`Fetching: ${book.title} by ${book.author}...`);
    const match = await searchBook(book.title, book.author);

    if (match) {
      results.push({
        title: book.title,
        author: book.author,
        coverUrl: getCoverUrl(match.cover_i, "M"),
        coverUrlLarge: getCoverUrl(match.cover_i, "L"),
        openLibraryKey: match.key || null,
        year: match.first_publish_year || null,
      });
      console.log(
        `  ✓ Found — cover: ${match.cover_i ? "yes" : "no"}, year: ${match.first_publish_year || "?"}`
      );
    } else {
      // Keep the book even without a match
      results.push({
        title: book.title,
        author: book.author,
        coverUrl: null,
        coverUrlLarge: null,
        openLibraryKey: null,
        year: null,
      });
    }

    // Be polite to Open Library
    await new Promise((r) => setTimeout(r, 500));
  }

  const output = {
    fetchedAt: new Date().toISOString(),
    books: results,
  };

  const { mkdir, writeFile } = await import("node:fs/promises");
  const { dirname } = await import("node:path");
  const { fileURLToPath } = await import("node:url");

  const outPath = fileURLToPath(OUT_PATH);
  await mkdir(dirname(outPath), { recursive: true });
  await writeFile(outPath, JSON.stringify(output, null, 2) + "\n");
  console.log(`\nWrote ${results.length} books to ${outPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
