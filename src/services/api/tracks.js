import {$host} from "./index";
import axios from "axios";

export const getPlaylistsByAnimeId = async (animeId) => {
    const {data} = await $host.get('playlist/by-anime/' + animeId);
    return data;
}
export const getPlaylistById = async (playlistId) => {
    const {data} = await $host.get('playlist/' + playlistId);
    return data;
}