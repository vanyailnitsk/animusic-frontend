import {$host} from "./index";

export const getAllSoundtracksByAnimeId = async (animeId) => {
    const {data} = await $host.get('anime/all-soundtracks-by-anime-id/'+animeId);
    return data;
}