import {IAnime} from "@/entities/anime";
import {$host} from "@/shared/api";

export const createAnime = async (animeData: IAnime) => {
    const {data} = await $host.post('anime/create', animeData)
    return {data}
}