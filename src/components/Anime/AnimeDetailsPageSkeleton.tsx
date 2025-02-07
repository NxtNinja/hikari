import { Skeleton } from "@/components/ui/skeleton";

export default function AnimeDetailsSkeleton() {
  return (
    <div className="container mx-auto space-y-6 p-6">
      <div className="flex flex-col items-center lg:flex-row lg:items-start lg:gap-6">
        <div className="flex w-full flex-col">
          <div className="flex flex-col gap-6">
            {/* Title Skeleton */}
            <div className="space-y-2">
              <Skeleton className="h-8 w-64" />
              <Skeleton className="h-6 w-48" />
            </div>

            <div className="flex w-full flex-col justify-start gap-16 lg:flex-row">
              {/* Image Skeleton */}
              <Skeleton className="h-[280px] w-full max-w-xs rounded-lg lg:w-1/3" />

              <div className="flex w-full max-w-2xl flex-col gap-5">
                {/* Overview Skeleton */}
                <Skeleton className="h-5 w-28" />
                <div className="flex items-center justify-between">
                  <Skeleton className="h-10 w-28" />
                  <Skeleton className="h-10 w-28" />
                  <Skeleton className="h-10 w-28" />
                </div>

                {/* Status & Timeline Skeleton */}
                <div className="flex flex-col gap-2">
                  <Skeleton className="h-8 w-60" />
                  <Skeleton className="h-8 w-72" />
                  <Skeleton className="h-8 w-60" />
                </div>

                {/* Synopsis Skeleton */}
                <Skeleton className="h-5 w-28" />
                <Skeleton className="h-24 w-full" />

                {/* Genre Skeleton */}
                <Skeleton className="h-5 w-20" />
                <div className="grid grid-cols-4 gap-3">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <Skeleton key={i} className="h-6 w-24 rounded-lg" />
                  ))}
                </div>

                {/* Characters Section */}
                <div className="flex w-full max-w-2xl flex-col gap-5">
                  <Skeleton className="h-5 w-28" />
                  <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <Skeleton key={i} className="h-52 w-36 rounded-lg" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Recommendations Skeleton */}
              <div className="flex w-full max-w-2xl flex-col gap-5">
                <Skeleton className="h-5 w-40" />
                <div className="">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <Skeleton key={i} className="h-28 w-full rounded-lg" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
