import React from 'react';
import playListCard from "../../icons/playlistcard.jpg"
import "./PlaylistCard.css"
import {PlaylistCardProps} from "../../models/Playlists";
const PlaylistCard = ({name,playlist,handleNavigate} : PlaylistCardProps) => {
    return (
        <div className="playlist__card__wrapper" onClick={() => handleNavigate(playlist.id)}>
            <img src={playListCard} alt=""/>
            <span>{name}</span>
        </div>
    );
};

export default PlaylistCard;