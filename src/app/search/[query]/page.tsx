import { Suspense, use } from "react";
import AnimeCard from "@/components/Anime/AnimeCard";
import { PaginationComponent } from "@/components/Pagination";
import kyServer from "@/lib/ky";
import { AnimeType } from "@/lib/types";
import Loading from "@/components/Loader";

interface SearchPageProps {
  params: Promise<{ query: string }>;
  searchParams: Promise<{ page?: string }>;
}

async function FetchAnimeResults({
  query,
  currentPage = 1,
}: {
  query: string;
  currentPage?: number;
}) {
  const decodedQuery = decodeURIComponent(query);
  const { data, pagination } = await kyServer
    .get(`anime?q=${decodedQuery}&limit=24&page=${currentPage}`, {
      next: { revalidate: 60 },
    })
    .json<AnimeType>();

  return (
    <>
      {data?.length > 0 ? (
        <div className="grid w-full grid-cols-2 place-items-center gap-3 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
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

export default function SearchResultsPage({
  params,
  searchParams,
}: SearchPageProps) {
  const { query } = use(params);
  const { page } = use(searchParams);
  const currentPage = Number(page) || 1;
  const decodedQuery = decodeURIComponent(query);

  return (
    <div className="space-y-5 sm:p-6">
      <h1 className="px-6 text-2xl font-bold sm:px-0">
        Results for {decodedQuery}
      </h1>
      <Suspense fallback={<Loading />}>
        <FetchAnimeResults query={query} currentPage={currentPage} />
      </Suspense>
    </div>
  );
}
