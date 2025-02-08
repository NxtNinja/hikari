import kyServer from "@/lib/ky";
import { AnimeType } from "@/lib/types";
import { HTTPError } from "ky";

const getFilteredAnime = async (apiUrl: string) => {
    try {
        const data = await kyServer
            .get(apiUrl, { next: { tags: ['getFilteredAnime'] } })
            .json<AnimeType>();



        return {
            data,
            pagination: data.pagination,
            isError: false,
            error: null
        }
    } catch (error) {
        const httpError = error as HTTPError;
        const errorJson = await httpError.response.json<any>(); // eslint-disable-line

        return {
            data: null,
            isError: true,
            error: errorJson.errors[0].message,
        };
    }
}

export default getFilteredAnime