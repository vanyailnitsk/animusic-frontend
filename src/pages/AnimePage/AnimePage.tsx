import React, {useEffect, useState} from 'react';
import {getAnimeInfo} from "../../services/api/anime";
import {useNavigate, useParams} from "react-router-dom";
import "./AnimePage.css"
import playPlaylist from '../../icons/play-playlist.png'
import Albums from "../../components/Albums/Albums";
import {storageUrl} from "../../services/api/consts";
import {IAlbums} from "../../models/Albums";
import {IAnime} from "../../models/Anime";
import AlbumsSkeleton from "../../components/Albums/Skeleton/AlbumsSkeleton";
import Skeleton from "react-loading-skeleton";

const AnimePage = () => {
    const {id} = useParams()
    const [animeData, setAnimeData] = useState<IAnime | null>(null)
    const [albums, setAlbums] = useState<IAlbums[]>([])
    const navigate = useNavigate();
    const [isLoadingImage, setIsLoadingImage] = useState(true)
    useEffect(() => {
        getAnimeInfo(id)
            .then(response => {
                setAnimeData(response.data);
                return response.data.albums
            })
            .then(albums => {
                setAlbums(albums)
            })
            .catch((error) => console.log(error))
    }, [id]);

    const handleNavigate = (albumId : number) => {
        navigate(`/album/${albumId}`)
    }
    return (
        <div className="anime__page__wrapper">
            <div className='blur'>
                <img src={storageUrl+animeData?.banner.image.source} alt=""/>
            </div>
            <div className="anime__banner">
                {isLoadingImage?
                    <Skeleton style={{height:'35vh',borderTopRightRadius:7,borderTopLeftRadius:7,position:"absolute",top:0}}/>
                : null
                }
                <div className='overlay'></div>
                <img
                    src={storageUrl+animeData?.banner.image.source} alt=""
                    onLoad={() => setIsLoadingImage(false)}
                />
                {!isLoadingImage && animeData &&
                    <div className="anime__title">
                        <h1>{animeData.title}</h1>
                    </div>

                }
            </div>
            {isLoadingImage?
               <div>
                   <AlbumsSkeleton/>
               </div>
                :null
            }
            {!isLoadingImage && animeData &&
                <div>
                    <div className='playlist__actions'>
                        <button className='play__playlist'>
                            <img src={playPlaylist} alt=""/>
                        </button>
                        <button className='follow__button'>
                            <span>Follow</span>
                        </button>
                    </div>
                    <Albums albums={albums} handleNavigate={handleNavigate}/>
                </div>
            }
        </div>
    );
};

export default AnimePage;