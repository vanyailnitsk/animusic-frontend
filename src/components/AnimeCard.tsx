import React from 'react';
import '../styles/AnimeCard.css'
import {useNavigate} from "react-router-dom";
import {AnimeCardProps} from "../interfaces/AnimeCards";
import {storageUrl} from "../services/api/consts";

const AnimeCard = ({card} : AnimeCardProps) => {
    const navigate = useNavigate();
    const imageUrl = storageUrl+card.cardImagePath
    return (
        <div className="anime__card" onClick={() => navigate('/anime/'+card.id)}>
            <img src={imageUrl} alt=""/>
            <span>{card.title}</span>
        </div>
    );
};

export default AnimeCard;