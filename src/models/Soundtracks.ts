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
    soundtracks: ISoundtrack[]
}
export interface SoundtrackProps{
    soundtrackData: ISoundtrack
    playlist: ISoundtrack[]
    index:number
}