import {$host} from "@/shared/api";
import {IAnime} from "@/entities/anime";

interface getAnimeInfoResponse {
    data: IAnime
}

export const getAnimeInfo = async (animeId: string | undefined): Promise<getAnimeInfoResponse> => {
    const data = await $host.get('anime/' + animeId);
    return data;
}