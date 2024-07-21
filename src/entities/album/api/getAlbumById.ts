import {IAlbum} from "@/entities/album";
import {$host} from "@/shared/api";

interface getAlbumResponse {
    data: IAlbum
}

export const getAlbumById = async (playlistId: string | undefined): Promise<getAlbumResponse> => {
    const response = await $host.get('albums/' + playlistId);
    return response;
}
