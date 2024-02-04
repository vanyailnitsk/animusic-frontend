import React from 'react';
import playListCard from "../images/playlistcard.jpg"
import "../styles/PlaylistCard.css"
const PlaylistCard = ({name,playlist,handleNavigate}) => {
    return (
        <div className="playlist__card__wrapper" onClick={() => handleNavigate(playlist.id)}>
            <img src={playListCard} alt=""/>
            <span className={{display:'block'}}>{name}</span>
        </div>
    );
};

export default PlaylistCard;