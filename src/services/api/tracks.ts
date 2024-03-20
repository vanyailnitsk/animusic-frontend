import {$host} from "./index";
import {IPlaylist} from "../../models/Playlists";

export const getPlaylistsByAnimeId = async (animeId : string) => {
    const {data} = await $host.get<IPlaylist>('playlist/by-anime/' + animeId);
    return data;
}
export const getPlaylistById = async (playlistId: string | undefined) => {
    const {data } = await $host.get<IPlaylist>('playlist/' + playlistId);
    return data;
}