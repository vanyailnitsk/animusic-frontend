import React from 'react';
import '../styles/AnimeCard.css'
import {useNavigate} from "react-router-dom";
import {animeCardUrl} from "../services/api/consts";
import {AnimeCardProps} from "../interfaces/AnimeCards";

const AnimeCard = ({card} : AnimeCardProps) => {
    const navigate = useNavigate();
    return (
        <div className="anime__card" onClick={() => navigate('/anime/'+card.id)}>
            <img src={animeCardUrl+card.id} alt=""/>
            <span>{card.title}</span>
        </div>
    );
};

export default AnimeCard;