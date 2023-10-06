import React, {useEffect, useState} from 'react';
import MusicPlayer from "../components/MusicPlayer";
import {useNavigate} from "react-router-dom";
import {getAnimeNavs} from "../services/api/anime";
import Soundtrack from "../components/Soundtrack";

const Homepage = () => {
    const navigate = useNavigate();
    const [animeNavs, setAnimeNavs] = useState([])
    useEffect(() => {
        getAnimeNavs().then(data => setAnimeNavs(data.data))
    }, [])

    return (
        <div>
            {animeNavs.map((nav) => (
                <div style={{margin:'300px'}}>
                    <h1>{nav.title}</h1>
                    <button onClick={() => navigate('/anime/'+nav.id)}>GO</button>
                </div>
            ))}
        </div>
    );
};

export default Homepage;