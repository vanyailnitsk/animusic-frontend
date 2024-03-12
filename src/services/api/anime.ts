import {$host} from "./index";
import {IAnime} from "../../models/Anime";
export const getAnimeInfo = async (animeId : string | undefined) => {
    const {data} = await $host.get<IAnime>('anime/'+animeId);
    return {data};
}


export const getAllAnime = async () => {
    const {data} = await $host.get('anime');
    return {data};
}


export const createAnime = async (animeData : IAnime) => {
    const {data} = await $host.post('anime/create',animeData)
    return {data}
}