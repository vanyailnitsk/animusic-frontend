import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {getAnimeNavs} from "../services/api/anime";
import "../style/HomePage.css"
import hunterCard from "../images/hunter-card.jpeg"

const Homepage = () => {
    const navigate = useNavigate();
    const [animeNavs, setAnimeNavs] = useState([])
    useEffect(() => {
        getAnimeNavs().then(data => setAnimeNavs(data.data))
    }, [])

    return (
        <div className="home-page-container">
            <div className="anime-card-container">
                {animeNavs.map((nav) => (
                    <div className="anime-container" onClick={() => navigate('/anime/'+nav.id)}>
                        <h1>{nav.title}</h1>
                        <img src={hunterCard} alt=""/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Homepage;