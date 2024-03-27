import {IPlaylist} from "./Playlists";

export interface ISoundtrack {
    soundtrack: SoundtrackData
}
export interface SoundtrackListProps {
    playlist: IPlaylist
}
export interface SoundtrackData{
    id: number
    animeTitle:string
    audioFile:string
    duration:number
    imageFile: string | null
    originalTitle:string
    album:{
        id:number
        name:string
    }

}
export interface SoundtrackProps{
    soundtrackData: SoundtrackData
    playlist: IPlaylist
    index:number
}