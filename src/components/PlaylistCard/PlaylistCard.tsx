import React, {useState} from 'react';
import playListCard from "../../icons/playlistcard.jpg"
import "./PlaylistCard.css"
import {PlaylistCardProps} from "../../models/Playlists";
import Skeleton from "react-loading-skeleton";
const PlaylistCard = ({name,playlist,handleNavigate} : PlaylistCardProps) => {
    const [loadingImg,setLoadingImg] = useState(true)
    return (
        <div className="playlist__card__wrapper" onClick={() => handleNavigate(playlist.id)}>
            {loadingImg?
                <Skeleton style={{width:152,height:152,position:'absolute',top:0,marginTop:13}}/>
                :null
            }
            <img src={playListCard} alt="" onLoad={() => setLoadingImg(false)}/>
            <span>{name}</span>
        </div>
    );
};

export default PlaylistCard;