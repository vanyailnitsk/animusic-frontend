import {$host} from "./index";
import {IPlaylist} from "../../models/Playlists";

export const getPlaylistById = async (playlistId: string | undefined) => {
    const {data } = await $host.get<IPlaylist>('playlist/' + playlistId);
    return data;
}

export const getFavoritesTracks = async () => {
    const {data} = await $host.get('user-media-library/favourites')
    return data
}