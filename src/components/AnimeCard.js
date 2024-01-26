import React from 'react';
import hunterCard from "../images/hunter-card.jpeg";
import '../styles/AnimeCard.css'
import {useNavigate} from "react-router-dom";

const AnimeCard = ({card}) => {
    const navigate = useNavigate();
    return (
        <div className="anime__card" onClick={() => navigate('/anime/'+card.id)}>
            <img src={hunterCard} alt=""/>
            <span>{card.title}</span>
        </div>
    );
};

export default AnimeCard;