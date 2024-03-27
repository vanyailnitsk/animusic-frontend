import React, {useEffect, useState} from 'react';
import {getAnimeInfo} from "../../services/api/anime";
import {useNavigate, useParams} from "react-router-dom";
import "./AnimePage.css"
import followButton from '../../icons/follow.png'
import Playlists from "../../components/Playlists/Playlists";
import {animeBannerUrl, storageUrl} from "../../services/api/consts";
import {IPlaylist} from "../../models/Playlists";
import {IAnime} from "../../models/Anime";
import PlaylistsSkeleton from "../../components/Playlists/Skeleton/PlaylistsSkeleton";
import Skeleton from "react-loading-skeleton";

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
                {isLoadingImage?
                    <Skeleton style={{height:'35vh',borderTopRightRadius:7,borderTopLeftRadius:7,position:"absolute",top:0}}/>
                : null
                }
                <img
                    src={storageUrl+animeData?.bannerImagePath} alt=""
                    onLoad={() => setIsLoadingImage(false)}
                />
            </div>
            {isLoadingImage?
               <div>
                   <Skeleton style={{height:40}} />
                   <PlaylistsSkeleton/>
               </div>
                :null
            }
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