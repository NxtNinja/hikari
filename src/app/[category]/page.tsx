import AnimeCard from "@/components/Anime/AnimeCard";
import Loading from "@/components/Loader";
import { PaginationComponent } from "@/components/Pagination";
import getAllAnime from "@/hooks/anime/getAllAnime";
import { categoryConfig } from "@/lib/categoryConfig";

import { Suspense, use } from "react";

async function FetchAnimeData({
  category,
  currentPage,
}: {
  category: string;
  currentPage: number;
}) {
  const config = categoryConfig[category];

  if (!config) {
    return <p className="text-center text-xl">Category not found.</p>;
  }

  const apiUrl = `${config.api}&page=${currentPage}`;
  const { data, pagination } = await getAllAnime(apiUrl);

  if (data) {
    return (
      <>
        <div className="grid w-full grid-cols-2 place-items-center gap-3 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
          {data?.data.map((anime, index) => (
            <AnimeCard key={`${anime.mal_id}-${index}`} anime={anime} />
          ))}
        </div>

        <PaginationComponent pagination={pagination} />
      </>
    );
  }
}

type Props = {
  params: Promise<{ category: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

// ❌ Do not use `async` on this function!
export default function CategoryPage({ params, searchParams }: Props) {
  const { category } = use(params);
  const { page } = use(searchParams);
  const currentPage = Number(Array.isArray(page) ? page[0] : page) || 1;

  return (
    <div className="space-y-5 sm:p-6">
      <h1 className="px-6 text-2xl font-bold sm:px-0">
        {categoryConfig[category]?.title || "Loading..."}
      </h1>
      <Suspense fallback={<Loading />}>
        <FetchAnimeData category={category} currentPage={currentPage} />
      </Suspense>
    </div>
  );
}
