import { Skeleton } from "../ui/skeleton";

const AnimeCardSkeleton = () => {
  return (
    <div className="flex w-full max-w-2xl flex-col items-center gap-3 bg-background p-4 sm:rounded-2xl md:gap-6 lg:flex-row lg:border lg:border-foreground/20">
      {/* Image Section */}
      <div className="relative h-60 w-full gap-3 overflow-hidden rounded-xl lg:w-[45%]">
        <Skeleton className="absolute inset-0 h-full w-full" />
      </div>

      {/* Mobile View Content */}
      <div className="flex w-full flex-col lg:hidden">
        <Skeleton className="h-5 w-3/4 rounded-lg" />
        <div className="mt-2 flex items-center justify-between">
          <Skeleton className="h-4 w-20" />
          <div className="flex items-center gap-2">
            <Skeleton className="h-5 w-5 rounded-full" />
            <Skeleton className="h-5 w-10 rounded-lg" />
          </div>
        </div>
      </div>

      {/* Desktop View Content */}
      <div className="hidden w-[55%] flex-col gap-3 lg:flex">
        <Skeleton className="h-5 w-24 rounded-lg" />
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-6 w-3/4 rounded-lg" />
        <div className="flex gap-3 text-lg">
          <div className="flex flex-col items-start gap-1">
            <div className="flex items-center gap-2">
              <Skeleton className="h-5 w-5 rounded-full" />
              <Skeleton className="h-5 w-10 rounded-lg" />
            </div>
            <Skeleton className="h-4 w-16" />
          </div>
          <Skeleton className="h-5 w-24 rounded-lg" />
        </div>
        <div className="flex gap-3">
          <Skeleton className="h-6 w-16 rounded-lg" />
          <Skeleton className="h-6 w-16 rounded-lg" />
          <Skeleton className="h-6 w-8 rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default AnimeCardSkeleton;
