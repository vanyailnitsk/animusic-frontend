import React, {useEffect, useState} from 'react';
import {getAnimeInfo} from "../../services/api/anime";
import {useNavigate, useParams} from "react-router-dom";
import "./AnimePage.css"
import defaultBanner from '..//../images/default-banner.jpg'
import followButton from '../../images/follow.png'
import Playlists from "../../components/Playlists";
import {animeBannerUrl} from "../../services/api/consts";

const AnimePage = () => {
    const {id} = useParams()
    const [animeData, setAnimeData] = useState({})
    const [playlists, setPlaylists] = useState([])
    const navigate = useNavigate();
    const [isLoadingImage, setIsLoadingImage] = useState(true)
    // const bannerUrl = animeBannerUrl + id;
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

    return (
        <div className="anime__page__wrapper">
            <div className='blur'>
                <img src={defaultBanner} alt=""/>
            </div>
            <div className="anime__banner">
                <img
                    src={defaultBanner} alt="Banner"
                    onLoad={() => setIsLoadingImage(false)}
                    onError={() => setIsLoadingImage(false)}
                />
            </div>
            {!isLoadingImage &&
                <div>
                    <div className="title__follow">
                        <h1>{animeData.title}</h1>
                        <img src={followButton} alt=""/>
                    </div>
                    <Playlists playlists={playlists} handleNavigate={handleNavigate}/>
                </div>
            }

        </div>
    );
};

export default AnimePage;