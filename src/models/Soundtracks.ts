import {IPlaylist} from "./Playlists";

export interface ISoundtrack {
    id: number
    animeName:string
    animeTitle:string
    audioFile:string
    duration:number
    imageFile: string | null
    originalTitle:string
}
export interface SoundtrackListProps {
    playlist: IPlaylist
}
export interface SoundtrackProps{
    soundtrackData: ISoundtrack
    playlist: IPlaylist
    index:number
}