import {IAlbums} from "./Albums";

export interface IAnime{
    bannerImagePath : string
    cardImagePath : string
    description : string | null
    folderName : string
    id : number
    albums : IAlbums[]
    releaseYear : string
    studio : string | null
    title : string
}