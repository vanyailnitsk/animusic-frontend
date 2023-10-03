import React, {useEffect, useState} from 'react';
import MusicPlayer from "../components/MusicPlayer";
import '../style/NavBar.css'
import {useNavigate} from "react-router-dom";
import {getAnimeNavs} from "../services/api/anime";

const NavBar = () => {
    const navigate = useNavigate();
    const [animeNavs, setAnimeNavs] = useState([])
    useEffect(() => {
        getAnimeNavs().then(data => setAnimeNavs(data.data))
    }, [])
    return (
    <div className="home">
    <div className="nav_container">
        <div className="navigation">
            <div className="logo">Animusic</div>
            <div className="actions">
                <input className="browse" type="text" id="search-box" placeholder="Поиск аниме"/>
            </div>
        </div>
    </div>
    <div className="player">
        <MusicPlayer/>
    </div>
    </div>
    );
};

export default NavBar;
