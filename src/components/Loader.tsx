import AnimeCardSkeleton from "./Anime/AnimeCardSkeleton";

export default function Loading() {
  return (
    <div className="grid w-full grid-cols-1 place-items-center gap-3 sm:grid-cols-2 md:grid-cols-3">
      {Array.from({ length: 9 }).map((_, index) => (
        <AnimeCardSkeleton key={index} />
      ))}
    </div>
  );
}
