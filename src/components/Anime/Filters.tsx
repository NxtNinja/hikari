"use client";
import { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { GenreType } from "@/lib/types";
import { Button } from "@/components/ui/button";

const Filters = ({ genres }: { genres: GenreType }) => {
  const defaultFilters = {
    type: "tv",
    status: "airing",
    rating: "r17",
    genre: "1",
  };

  // Load filters from localStorage and merge with defaults
  const [filters, setFilters] = useState(() => {
    if (typeof window !== "undefined") {
      const storedFilters = JSON.parse(
        localStorage.getItem("animeFilters") || "{}",
      );
      return { ...defaultFilters, ...storedFilters };
    }
  });

  // Update localStorage whenever filters change
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("animeFilters", JSON.stringify(filters));
    }
  }, [filters]);

  // Function to update filter state
  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev: object) => ({ ...prev, [key]: value }));
  };

  // Function to fetch anime based on filters
  const fetchFilteredAnime = () => {
    console.log("Fetching anime with filters:", filters);
    // Call API here with the filters object
  };

  return (
    <>
      <div className="grid grid-cols-4 gap-3 sm:p-6">
        <Select
          onValueChange={(value) => handleFilterChange("type", value)}
          defaultValue={filters.type}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Anime Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="tv">TV</SelectItem>
            <SelectItem value="movie">Movie</SelectItem>
            <SelectItem value="ova">OVA</SelectItem>
            <SelectItem value="special">Special</SelectItem>
            <SelectItem value="ona">ONA</SelectItem>
            <SelectItem value="music">Music</SelectItem>
            <SelectItem value="cm">CM</SelectItem>
            <SelectItem value="pv">PV</SelectItem>
            <SelectItem value="tv_special">TV Special</SelectItem>
          </SelectContent>
        </Select>

        <Select
          onValueChange={(value) => handleFilterChange("status", value)}
          defaultValue={filters.status}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Anime Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="airing">Airing</SelectItem>
            <SelectItem value="complete">Complete</SelectItem>
            <SelectItem value="upcoming">Upcoming</SelectItem>
          </SelectContent>
        </Select>

        <Select
          onValueChange={(value) => handleFilterChange("rating", value)}
          defaultValue={filters.rating}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Anime Rating" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="g">G - All Ages</SelectItem>
            <SelectItem value="pg">PG - Children</SelectItem>
            <SelectItem value="pg13">PG-13 - Teens 13 or older</SelectItem>
            <SelectItem value="r17">R - 17+ (violence & profanity)</SelectItem>
            <SelectItem value="r">R+ - Mild Nudity</SelectItem>
            <SelectItem value="rx">Rx - Hentai</SelectItem>
          </SelectContent>
        </Select>

        <Select
          onValueChange={(value) => handleFilterChange("genre", value)}
          defaultValue={filters.genre}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Anime Genre" />
          </SelectTrigger>
          <SelectContent>
            {genres.data?.map((genre) => (
              <SelectItem key={genre.mal_id} value={`${genre.mal_id}`}>
                {genre.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Button to fetch filtered anime */}
        <div className="col-span-4 mt-4 flex justify-center">
          <Button onClick={fetchFilteredAnime}>Apply Filters</Button>
        </div>
      </div>
    </>
  );
};

export default Filters;
