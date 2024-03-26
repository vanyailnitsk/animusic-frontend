import {$host} from "./api";


export default class MusicService{
    static addToFavorite(id:number){
        return $host.post('user-media-library/favourites',{},{
            params:{
                trackId:id
            }
        })
}
}