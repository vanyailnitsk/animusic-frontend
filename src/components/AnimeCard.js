import React from 'react';
import defaultAnimeCard from "../images/default-anime-card.jpeg";
import '../styles/AnimeCard.css'
import {useNavigate} from "react-router-dom";

const AnimeCard = ({card}) => {
    const navigate = useNavigate();
    return (
        <div className="anime__card" onClick={() => navigate('/anime/'+card.id)}>
            <img src={defaultAnimeCard} alt=""/>
            <span>{card.title}</span>
        </div>
    );
};

export default AnimeCard;