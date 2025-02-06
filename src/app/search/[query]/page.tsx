import { Suspense } from "react";
import AnimeCard from "@/components/Anime/AnimeCard";
import { PaginationComponent } from "@/components/Pagination";
import kyServer from "@/lib/ky";
import { AnimeType } from "@/lib/types";
import Loading from "@/components/Loader";

interface PageProps {
  params: { query: string };
}

async function FetchAnimeResults({ query }: { query: string }) {
  const decodedQuery = decodeURIComponent(query);
  const { data, pagination } = await kyServer
    .get(`anime?q=${decodedQuery}&limit=24`, {
      next: { revalidate: 60 },
    })
    .json<AnimeType>();

  return (
    <>
      {data.length > 0 ? (
        <div className="grid w-full grid-cols-1 place-items-center gap-3 sm:grid-cols-2 md:grid-cols-3">
          {data.map((anime, index) => (
            <AnimeCard key={`${anime.mal_id}-${index}`} anime={anime} />
          ))}
        </div>
      ) : (
        <p className="text-center text-xl">No results found.</p>
      )}
      <PaginationComponent pagination={pagination} />
    </>
  );
}

export default function SearchResultsPage({ params }: PageProps) {
  const { query } = params;

  return (
    <div className="space-y-5 sm:p-6">
      <h1 className="px-6 text-2xl font-bold sm:px-0">
        Results for {decodeURIComponent(query)}
      </h1>
      <Suspense fallback={<Loading />}>
        <FetchAnimeResults query={query} />
      </Suspense>
    </div>
  );
}
