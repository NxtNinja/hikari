import kyServer from "@/lib/ky";
import { Anime } from "@/lib/types";
import { HTTPError } from "ky";

const getAnimeDetails = async (id: number) => {
    try {
        const data = await kyServer.get(`anime/${id}`).json<{ data: Anime }>();
        return {
            data,
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

export default getAnimeDetails