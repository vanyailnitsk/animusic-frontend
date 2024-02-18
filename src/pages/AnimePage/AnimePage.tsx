import React, {useEffect, useState} from 'react';
import {getAnimeInfo} from "../../services/api/anime";
import {useNavigate, useParams} from "react-router-dom";
import "./AnimePage.css"
import followButton from '../../icons/follow.png'
import Playlists from "../../components/Playlists";
import {animeBannerUrl} from "../../services/api/consts";
import {IPlaylist} from "../../interfaces/Playlists";
import {IAnime} from "../../interfaces/Anime";

const AnimePage = () => {
    const {id} = useParams()
    const [animeData, setAnimeData] = useState<Partial<IAnime>>({})
    const [playlists, setPlaylists] = useState<IPlaylist[]>([])
    const navigate = useNavigate();
    const [isLoadingImage, setIsLoadingImage] = useState(true)
    const bannerUrl = animeBannerUrl + id;
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
                <img src={bannerUrl} alt=""/>
            </div>
            <div className="anime__banner">
                <img
                    src={bannerUrl} alt="Banner"
                    onLoad={() => setIsLoadingImage(false)}
                    onError={() => setIsLoadingImage(false)}
                />
            </div>
            {!isLoadingImage &&
                <div >
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