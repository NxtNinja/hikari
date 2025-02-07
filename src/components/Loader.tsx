import AnimeCardSkeleton from "./Anime/AnimeCardSkeleton";

export default function Loading() {
  return (
    <div className="grid w-full grid-cols-2 place-items-center gap-3 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
      {Array.from({ length: 9 }).map((_, index) => (
        <AnimeCardSkeleton key={index} />
      ))}
    </div>
  );
}
