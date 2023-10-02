import {$host} from "./index";

export const getPlaylistsByAnimeId = async (animeId) => {
    const {data} = await $host.get('playlist/playlists-by-anime/' + animeId);
    return data;
}
export const getPlaylistById = async (playlistId) => {
    const {data} = await $host.get('playlist/' + playlistId);
    return data;
}