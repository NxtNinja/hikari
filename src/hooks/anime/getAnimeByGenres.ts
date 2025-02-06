import kyServer from "@/lib/ky";
import { AnimeType, DefautResponseType } from "@/lib/types";
import { HTTPError } from "ky";

const getAnimeByGenres = async (genreIds: number[]) => {
    try {
        // Create an array of promises to fetch anime for each genre
        const fetchPromises = genreIds.map((genreId) =>
            kyServer.get(`anime?genres=${genreId}`).json<DefautResponseType<AnimeType>>()
        );

        // Wait for all promises to resolve
        const results = await Promise.all(fetchPromises);

        // Combine the results from each genre into one array
        const allAnimes = results.flatMap(result => result.data);

        // Remove duplicates by anime ID (assuming `mal_id` is unique)
        const uniqueAnimes = Array.from(new Map(allAnimes.map(anime => [anime.data.map(anime => anime.mal_id), anime])).values());

        return {
            data: uniqueAnimes,
            isError: false,
            error: null
        };
    } catch (error) {
        const httpError = error as HTTPError;
        const errorJson = await httpError.response.json<any>(); // eslint-disable-line

        return {
            data: null,
            isError: true,
            error: errorJson.errors[0].message,
        };
    }
};

export default getAnimeByGenres;
