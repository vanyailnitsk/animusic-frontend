import React from 'react';
import '../styles/AnimeCard.css'
import {useNavigate} from "react-router-dom";
import {animeCardUrl} from "../services/api/consts";

const AnimeCard = ({card}) => {
    const navigate = useNavigate();
    return (
        <div className="anime__card" onClick={() => navigate('/anime/'+card.id)}>
            <img src={animeCardUrl+card.id} alt=""/>
            <span>{card.title}</span>
        </div>
    );
};

export default AnimeCard;