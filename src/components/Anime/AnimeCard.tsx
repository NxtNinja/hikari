"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { Anime } from "@/lib/types";
import { useRouter } from "next/navigation";

const AnimeCard = ({ anime }: { anime: Anime }) => {
  const displayedGenres = anime.genres.slice(0, 2);
  const extraGenres = anime.genres.length - 2;

  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/anime/${anime.mal_id}`)}
      className="flex w-full max-w-2xl cursor-pointer flex-col items-start justify-start gap-3 bg-background p-4 sm:rounded-2xl md:gap-6 lg:flex-row lg:border lg:border-foreground/20"
    >
      {/* Image Section */}
      <div className="relative h-60 w-full gap-3 overflow-hidden rounded-xl lg:w-[45%]">
        <Image
          src={anime.images.jpg.large_image_url}
          alt={anime.title}
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      </div>

      <div className="flex flex-col justify-start lg:hidden">
        <div className="flex items-center justify-start gap-2">
          <Star className="h-5 w-5 text-yellow-500" />
          <span className="font-semibold">{anime.score}</span>
        </div>
        <h2 className="line-clamp-1 text-base font-bold">{anime.title}</h2>
        <div className="flex items-center justify-between">
          <p className="text-base text-muted-foreground">
            {anime.episodes} episodes
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="hidden flex-col gap-3 lg:flex lg:w-[55%]">
        <span className="rounded-lg text-sm font-semibold text-foreground">
          {anime.status}
        </span>
        <p className="text-base text-muted-foreground">
          {anime.episodes} episodes
        </p>
        <h2 className="line-clamp-2 text-xl font-bold">{anime.title}</h2>
        <div className="flex gap-3 text-lg">
          <div className="flex flex-col items-start justify-start">
            <div className="flex items-center justify-center gap-2">
              <Star className="h-5 w-5 text-yellow-500" />
              <span className="font-semibold">{anime.score}</span>
            </div>
            <span className="text-base text-muted-foreground">
              {anime.members} users
            </span>
          </div>
          <span className="font-semibold text-primary">
            #{anime.rank} Ranking
          </span>
        </div>
        <div className="flex gap-3">
          {displayedGenres.map((genre) => (
            <span
              key={genre.mal_id}
              className="rounded-lg bg-muted px-3 py-1 text-sm font-medium text-foreground"
            >
              {genre.name}
            </span>
          ))}
          {extraGenres > 0 && <span className="font-bold">+{extraGenres}</span>}
        </div>
      </div>
    </div>
  );
};

export default AnimeCard;
