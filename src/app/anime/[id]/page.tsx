import Image from "next/image";
import { Star } from "lucide-react";
import { Suspense } from "react";
import AnimeCharacters from "@/components/Anime/Characters";
import Recommendations from "@/components/Anime/Recommendations";
import { Badge } from "@/components/ui/badge";
import AnimeDetailsSkeleton from "@/components/Anime/AnimeDetailsPageSkeleton";
import getAnimeDetails from "@/hooks/anime/getAnimeDetails";
import { toast } from "sonner";

async function fetchAnimeDetails(id: number) {
  try {
    const anime = await getAnimeDetails(id);

    return anime;
  } catch (error) {
    console.log(error);

    return null;
  }
}

async function AnimeDetailsContent({ id }: { id: number }) {
  const data = await fetchAnimeDetails(id);

  if (data?.data === null || data?.error !== null) {
    toast.error(data?.error);
    return <div>Something went wrong</div>;
  }

  if (data.data && !data?.isError && data?.error === null) {
    return (
      <div className="container mx-auto space-y-6 p-6">
        <div className="flex flex-col items-center lg:flex-row lg:items-start lg:gap-6">
          <div className="flex w-full flex-col">
            <div className="flex flex-col gap-6">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold">{data.data.data.title}</h1>
                <h3 className="text-xl">
                  English title: {data.data.data.title_english}
                </h3>
              </div>
              <div className="flex w-full flex-col justify-start gap-16 lg:flex-row">
                <div className="relative w-full max-w-xs lg:w-1/3">
                  <Image
                    src={data.data.data.images.jpg.large_image_url}
                    alt={data.data.data.title}
                    width={400}
                    height={600}
                    className="rounded-lg shadow-lg"
                  />
                </div>
                <div className="flex w-full max-w-2xl flex-col gap-5">
                  <p className="text-foreground/60">Overview</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Star
                        fill="currentColor"
                        className="h-7 w-7 text-yellow-500"
                      />
                      <span className="font-semibold md:text-2xl">
                        {data.data.data.score}
                      </span>
                    </div>
                    <span className="font-semibold md:text-2xl">
                      {data.data.data.episodes} Episodes
                    </span>
                    <span className="font-semibold md:text-2xl">
                      # {data.data.data.rank} Ranking
                    </span>
                  </div>
                  <div className="flex flex-col justify-between gap-2">
                    <span className="font-semibold md:text-2xl">
                      Status: {data.data.data.status}
                    </span>
                    <span className="font-semibold md:text-2xl">
                      Timeline: {data.data.data.aired.string}
                    </span>
                    <span className="font-semibold md:text-2xl">
                      Rating: {data.data.data.rating}
                    </span>
                  </div>
                  <p className="text-foreground/60">Synopsis</p>
                  <p className="text-lg">{data.data.data.synopsis}</p>
                  <p className="text-foreground/60">Genre</p>
                  <div className="grid grid-cols-4 gap-3">
                    {data.data.data.genres.map((genre) => (
                      <Badge
                        key={genre.mal_id}
                        className="rounded-lg bg-muted px-3 py-1 text-sm font-medium text-foreground"
                      >
                        {genre.name}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex w-full max-w-2xl flex-col gap-5">
                    <p className="text-foreground/60">Characters</p>
                    <AnimeCharacters animeId={data.data.data.mal_id} />
                  </div>
                </div>
                <div className="flex w-full max-w-2xl flex-col gap-5">
                  <p className="text-foreground/60">Recommendations</p>
                  <Recommendations animeId={data.data.data.mal_id} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default async function AnimeDetailsPage({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;
  return (
    <Suspense fallback={<AnimeDetailsSkeleton />}>
      <AnimeDetailsContent id={id} />
    </Suspense>
  );
}
