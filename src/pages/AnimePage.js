import React, {useEffect, useState} from 'react';
import {getAnimeBanner, getAnimeInfo} from "../services/api/anime";
import {useNavigate, useParams} from "react-router-dom";
import hunterxhunterBanner from "../images/hunterxhunter-banner.jpg"
import "../style/AnimePage.css"
import playButton from "../images/play-button.png"
import {animeBannerUrl} from "../services/api/consts";

const AnimePage = () => {
    const {id} = useParams()
    const [animeData, setAnimeData] = useState({})
    const [error, setError] = useState(false);
    const [playlists, setPlaylists] = useState([])
    const navigate = useNavigate();
    const bannerUrl = animeBannerUrl + id;
    useEffect(() => {
        getAnimeInfo(id)
            .then(data => {
                setAnimeData(data.data);
                return data.data.playlists
            })
            .then(playlistsData => {
                setPlaylists(playlistsData)
            })
            .catch((error) => console.log(error))
    }, [id]);

    const handleNavigate = (playlistId) => {
        navigate(`/playlist/${playlistId}`)
    }
    const handleBannerError = () => {
        setError(true);
    };
    return (
        <div className="main_page">
            <img src={bannerUrl} alt="" className="anime_image" onError={handleBannerError}/>
            {/*<img src={bannerUrl} alt="" className="anime_image"/>*/}
            {<h1 className="title">{animeData.title}</h1>}
            <div className='buttons'>
                <button className="play_btn">
                    <img src={playButton} alt=""/>
                </button>
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