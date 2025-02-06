import { Skeleton } from "../ui/skeleton";

const AnimeCardSkeleton = () => {
  return (
    <div className="flex w-full max-w-2xl items-center gap-6 bg-background p-4 sm:rounded-2xl sm:border sm:border-foreground/20">
      {/* Image Section */}
      <Skeleton className="relative h-60 w-[45%] overflow-hidden rounded-xl" />

      {/* Content Section */}
      <div className="flex w-[55%] flex-col gap-5">
        <Skeleton className="h-5 w-24 rounded-lg" /> {/* Status */}
        <Skeleton className="h-4 w-32" /> {/* Episodes */}
        <Skeleton className="h-6 w-3/4 rounded-lg" /> {/* Title */}
        {/* Score & Ranking Section */}
        <div className="flex gap-3 text-lg">
          <div className="flex flex-col items-start justify-start gap-1">
            <div className="flex items-center justify-center gap-2">
              <Skeleton className="h-5 w-5 rounded-full" /> {/* Star Icon */}
              <Skeleton className="h-5 w-10 rounded-lg" /> {/* Score */}
            </div>
            <Skeleton className="h-4 w-16" /> {/* Users */}
          </div>
          <Skeleton className="h-5 w-24 rounded-lg" /> {/* Ranking */}
        </div>
        {/* Genre Section */}
        <div className="flex gap-3">
          <Skeleton className="h-6 w-16 rounded-lg" />
          <Skeleton className="h-6 w-16 rounded-lg" />
          <Skeleton className="h-6 w-8 rounded-lg" /> {/* +X more */}
        </div>
      </div>
    </div>
  );
};

export default AnimeCardSkeleton;
