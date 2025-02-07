import { Skeleton } from "@/components/ui/skeleton";

const RecommendationsSkeleton = () => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-4 rounded-lg p-4 transition"
          >
            <Skeleton className="h-[200px] w-[150px] rounded-lg" />
            <Skeleton className="h-4 w-32 rounded" />
            <Skeleton className="h-3 w-20 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendationsSkeleton;
