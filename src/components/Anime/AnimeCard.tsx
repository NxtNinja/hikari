import Image from "next/image";
import { Star } from "lucide-react";
import { Anime } from "@/lib/types";

const AnimeCard = ({ anime }: { anime: Anime }) => {
  const displayedGenres = anime.genres.slice(0, 2);
  const extraGenres = anime.genres.length - 2;

  return (
    <div className="flex w-full max-w-2xl cursor-pointer items-center gap-6 bg-background p-4 sm:rounded-2xl sm:border sm:border-foreground/20">
      {/* Image Section */}
      <div className="relative h-60 w-[45%] overflow-hidden rounded-xl">
        <Image
          src={anime.images.jpg.large_image_url}
          alt={anime.title}
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      </div>

      {/* Content Section */}
      <div className="flex w-[55%] flex-col gap-3">
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
