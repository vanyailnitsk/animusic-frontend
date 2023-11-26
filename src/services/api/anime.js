import {$host} from "./index";

export const getAllSoundtracksByAnimeId = async (animeId) => {
    const {data} = await $host.get('anime/all-soundtracks-by-anime-id/'+animeId);
    return data;
}

export const getAnimeInfo = async (animeId) => {
    const {data} = await $host.get('anime/info/'+animeId);
    return {data};
}

export const getAnimeBanner = async (animeId) => {
    const {data} = await $host.get('anime/info/banner'+animeId);
    return {data};
}

export const getAllAnime = async () => {
    const {data} = await $host.get('anime');
    return {data};
}

export const getAnimeNavs = async () => {
    const {data} = await $host.get('anime/navigation');
    return {data};
}

export const createAnime = async (animeData) => {
    const {data} = await $host.post('anime/create',animeData)
    return {data}
}