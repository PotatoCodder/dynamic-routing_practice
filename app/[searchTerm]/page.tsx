import React from "react";
import getWikiResult from "@/lib/getWikiResult";

type Props = {
  params: {
    searchTerm: string;
  };
};

export default async function SearchResult({ params: { searchTerm } }: Props) {
  const data = await getWikiResult(searchTerm);
  console.log("Data from API:", data); // Log the response data for debugging
  const results = data?.query?.pages;

  const content = (
    <main className="bg-slate-200 mx-auto max-w-lg py-1 min-h-screen">
      {results ? (
        Object.values(results).map((result: any) => (
          <div key={result.pageid} className="p-4 bg-white my-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-2">{result.title}</h2>
            <p className="mb-4">{result.extract}</p>
            {result.thumbnail && (
              <img
                src={result.thumbnail.source}
                alt={result.title}
                width={result.thumbnail.width}
                height={result.thumbnail.height}
                className="mx-auto rounded-lg"
              />
            )}
          </div>
        ))
      ) : (
        <h2 className="p-4 text-xl">{`No results found for: ${searchTerm}`}</h2>  
      )}
    </main>
  );

  return content;
}
