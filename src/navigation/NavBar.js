// NavBar.js
import React, {useEffect, useState} from 'react';
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';
import {CREATE_ANIME, CREATE_SOUNDTRACK_FROM_FILE, CREATE_SOUNDTRACK_FROM_YOUTUBE, HOME_ROUTE} from "./routes";
import MusicPlayer from "../components/MusicPlayer";
import '../style/NavBar.css'
import {useNavigate} from "react-router-dom";
import {getAnimeNavs} from "../services/api/anime";
import {findAllByDisplayValue} from "@testing-library/react";

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
