import {$host} from "./index";
export const getAnimeInfo = async (animeId) => {
    const {data} = await $host.get('anime/'+animeId);
    return {data};
}


export const getAllAnime = async () => {
    const response = await $host.get('anime');
    return response;
}


export const createAnime = async (animeData) => {
    const {data} = await $host.post('anime/create',animeData)
    return {data}
}