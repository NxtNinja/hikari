import { Suspense } from "react";
import AnimeCard from "@/components/Anime/AnimeCard";
import { PaginationComponent } from "@/components/Pagination";
import { categoryConfig } from "@/lib/categoryConfig";
import kyServer from "@/lib/ky";
import { AnimeType } from "@/lib/types";
import Loading from "@/components/Loader";

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
  const { data, pagination } = await kyServer
    .get(apiUrl, { next: { revalidate: 60 } })
    .json<AnimeType>();

  return (
    <>
      <div className="grid w-full grid-cols-1 place-items-center gap-3 sm:grid-cols-2 md:grid-cols-3">
        {data?.map((anime, index) => (
          <AnimeCard key={`${anime.mal_id}-${index}`} anime={anime} />
        ))}
      </div>
      <PaginationComponent pagination={pagination} />
    </>
  );
}

type Props = {
  params: { category: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function CategoryPage({ params, searchParams }: Props) {
  const { category } = params;
  const page = searchParams.page;
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
