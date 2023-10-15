import React, {useEffect, useState} from 'react';
import {getAnimeInfo} from "../services/api/anime";
import {useNavigate, useParams} from "react-router-dom";
import hunterxhunterBanner from "../images/hunterxhunter-banner.jpg"
import "../style/AnimePage.css"
import {getPlaylistsByAnimeId} from "../services/api/tracks";

const AnimePage = () => {
    const {id} = useParams()
    const [animeData,setAnimeData] = useState({})
    const [playlists,setPlaylists] = useState([])
    const navigate = useNavigate();
    useEffect(() => {
        getAnimeInfo(id)
            .then(data => {
                setAnimeData(data.data);
            })
            .catch((error) => console.log(error))
        getPlaylistsByAnimeId(id)
            .then(data => {
                setPlaylists(data)
            });
    }, [id]);

    const handleNavigate= (playlistId) => {
        navigate(`/playlist/${playlistId}`)
    }
    return (
        <div className="main_page">
            <img src={hunterxhunterBanner} alt="" className="anime_image"/>
            <div className='buttons'>
                <button className="play_btn">PLAY</button>
                <button className="follow_btn">FOLLOW</button>
            </div>
            <div className="playlists">
                {playlists.map(playlist => (
                    <button onClick={() => handleNavigate(playlist.id)}>{playlist.name}</button>
                ))}
            </div>
        </div>
    );
};

export default AnimePage;