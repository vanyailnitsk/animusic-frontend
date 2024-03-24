import {ISoundtrack} from "./Soundtracks";

export interface IPlaylist {
    bannerLink:string
    id:number
    imageUrl:string
    name:string
    soundtracks: ISoundtrack[]
}
export interface PlaylistsProps {
    playlists:IPlaylist[]
    handleNavigate(playlistId : number) : void
}
export interface PlaylistCardProps{
    name:string
    playlist: IPlaylist
    handleNavigate(playlistId : number):void
}

export interface UserPlaylist{

}
