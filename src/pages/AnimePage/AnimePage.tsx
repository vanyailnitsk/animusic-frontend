import React, {useEffect, useState} from 'react';
import {getAnimeInfo} from "../../services/api/anime";
import {useNavigate, useParams} from "react-router-dom";
import "./AnimePage.css"
import followButton from '../../icons/follow.png'
import Playlists from "../../components/Playlists/Playlists";
import {animeBannerUrl, storageUrl} from "../../services/api/consts";
import {IPlaylist} from "../../models/Playlists";
import {IAnime} from "../../models/Anime";

const AnimePage = () => {
    const {id} = useParams()
    const [animeData, setAnimeData] = useState<IAnime | null>(null)
    const [playlists, setPlaylists] = useState<IPlaylist[]>([])
    const navigate = useNavigate();
    const [isLoadingImage, setIsLoadingImage] = useState(true)
    useEffect(() => {
        getAnimeInfo(id)
            .then(response => {
                setAnimeData(response.data);
                return response.data.playlists
            })
            .then(playlistsData => {
                setPlaylists(playlistsData)
            })
            .catch((error) => console.log(error))
    }, [id]);

    const handleNavigate = (playlistId : number) => {
        navigate(`/playlist/${playlistId}`)
    }
    return (
        <div className="anime__page__wrapper">
            <div className='blur'>
                <img src={storageUrl+animeData?.bannerImagePath} alt=""/>
            </div>
            <div className="anime__banner">
                <img
                    src={storageUrl+animeData?.bannerImagePath} alt="Banner"
                    onLoad={() => setIsLoadingImage(false)}
                    onError={() => setIsLoadingImage(false)}
                />
            </div>
            {!isLoadingImage && animeData &&
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