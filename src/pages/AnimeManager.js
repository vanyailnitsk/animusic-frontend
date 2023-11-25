import React from 'react';
import CreateAnime from "../modals/CreateAnime";
import '../style/AnimeManager.css'

const AnimeManager = () => {
    return (
        <div className="anime-manager-container">
            <CreateAnime/>
        </div>
    );
};

export default AnimeManager;