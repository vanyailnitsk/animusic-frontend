import React, {useEffect, useState} from 'react';
import '../style/NavBar.css'
import {Link, useNavigate} from "react-router-dom";
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
            <Link to="" className="logo">Animusic</Link>
            <div className="actions">
                <input className="browse" type="text" id="search-box" placeholder="Поиск аниме"/>
            </div>
        </div>
    </div>
    </div>
    );
};

export default NavBar;
