import React, {useState} from 'react';
import playListCard from "../../icons/playlistcard.jpg"
import "./AlbumCard.css"
import {AlbumCardProps} from "../../models/Albums";
import Skeleton from "react-loading-skeleton";
const AlbumCard = ({name,id,handleNavigate} : AlbumCardProps) => {
    const [loadingImg,setLoadingImg] = useState(true)
    return (
        <div className="album__card__wrapper" onClick={() => handleNavigate(id)}>
            {loadingImg?
                <Skeleton style={{width:152,height:152,position:'absolute',top:0,marginTop:13}}/>
                :null
            }
            <img src={playListCard} alt="" onLoad={() => setLoadingImg(false)}/>
            <span>{name}</span>
        </div>
    );
};

export default AlbumCard;