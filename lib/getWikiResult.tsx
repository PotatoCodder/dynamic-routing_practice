import React from "react";

export default async function getWikiResult(searchTerm: string) {
  const searchParams = new URLSearchParams({
    action: "query",
    generator: "search",
    gsrsearch: searchTerm,
    gsrlimit: "10",
    prop: "pageimages|extracts",
    exchars: "100",
    exintro: "true",
    explaintext: "true",
    format: "json",
    origin: "*",
  });

  const response = await fetch("https://en.wikipedia.org/w/api.php?" + searchParams);

  if (!response.ok) {
    throw new Error(`Failed to fetch Wikipedia data: ${response.statusText}`);
  }

  return response.json() as Promise<SearchResult>;
}
