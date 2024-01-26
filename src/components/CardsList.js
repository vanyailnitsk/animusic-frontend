import React from 'react';
import AnimeCard from "./AnimeCard";
import '../styles/CardsList.css'

const CardsList = ({animeCards}) => {
    return (
        <div className='cardslist__wrapper'>
            {animeCards.map(card =>
                <AnimeCard card={card} key={card.id}/>
            )}
        </div>
    );
};

export default CardsList;