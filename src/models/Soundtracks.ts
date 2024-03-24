import {IPlaylist} from "./Playlists";

export interface ISoundtrack {
    soundtrack: SoundtrackData
}
export interface SoundtrackListProps {
    playlist: IPlaylist
}
export interface SoundtrackData{
    id: number
    animeName:string
    animeTitle:string
    audioFile:string
    duration:number
    imageFile: string | null
    originalTitle:string
}
export interface SoundtrackProps{
    soundtrackData: SoundtrackData
    playlist: IPlaylist
    index:number
}