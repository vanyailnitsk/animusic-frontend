import {IPlaylist} from "./Playlists";

export interface IAnime{
    bannerImagePath : string
    cardImagePath : string
    description : string | null
    folderName : string
    id : number
    playlists : IPlaylist[]
    releaseYear : string
    studio : string | null
    title : string
}