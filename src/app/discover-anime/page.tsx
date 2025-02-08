import AnimeCard from "@/components/Anime/AnimeCard";
import Filters from "@/components/Anime/Filters";
import { PaginationComponent } from "@/components/Pagination";
import getFilteredAnime from "@/hooks/anime/getFilteredAnime";
import getAllGenres from "@/hooks/genres/getAllGenre";

const DiscoverAnime = async () => {
  const genres = await getAllGenres();

  const getFiltersFromLocalStorage = () => {
    if (typeof window !== "undefined") {
      const storedFilters = JSON.parse(
        localStorage.getItem("animeFilters") || "{}",
      );
      return new URLSearchParams(storedFilters).toString();
    }
    return "";
  };

  const queryParams = getFiltersFromLocalStorage();
  console.log(queryParams);

  const data = await getFilteredAnime(`anime?${queryParams}`);

  console.log(data.data, data.pagination);

  if (
    genres.data !== null &&
    data?.data !== null &&
    data?.pagination !== null
  ) {
    return (
      <>
        <Filters genres={genres} />
        <div className="grid w-full grid-cols-2 place-items-center gap-3 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
          {data?.data.data.map((anime, index) => (
            <AnimeCard key={`${anime.mal_id}-${index}`} anime={anime} />
          ))}
        </div>

        <PaginationComponent pagination={data.pagination} />
      </>
    );
  }
};

export default DiscoverAnime;
