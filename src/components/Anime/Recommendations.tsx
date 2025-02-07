import kyServer from "@/lib/ky";
import { Recommendation } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import RecommendationsSkeleton from "./RecommendationSkeleton";

async function fetchRecommendations(id: number) {
  const response = await kyServer
    .get(`anime/${id}/recommendations`)
    .json<{ data: Recommendation[] }>();
  return response.data;
}

const RecommendationsContent = async ({ animeId }: { animeId: number }) => {
  const recommendations = await fetchRecommendations(animeId);

  return (
    <div className="space-y-4">
      {recommendations.length > 0 ? (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {recommendations.map((rec) => (
            <Link
              key={rec.entry.mal_id}
              href={`/anime/${rec.entry.mal_id}`}
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-4 rounded-lg p-4 transition"
            >
              <Image
                src={rec.entry.images.jpg.image_url}
                alt={rec.entry.title}
                width={150}
                height={200}
                className="rounded-lg shadow-lg"
              />
              <div>
                <h3 className="text-base font-semibold">{rec.entry.title}</h3>
                <p className="text-sm text-gray-500">{rec.votes} votes</p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No recommendations available.</p>
      )}
    </div>
  );
};

const Recommendations = ({ animeId }: { animeId: number }) => {
  return (
    <Suspense fallback={<RecommendationsSkeleton />}>
      <RecommendationsContent animeId={animeId} />
    </Suspense>
  );
};

export default Recommendations;
