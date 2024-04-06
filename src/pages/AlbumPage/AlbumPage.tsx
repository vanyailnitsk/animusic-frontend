import React, {useEffect, useState} from 'react';
import SoundtrackList from "../../components/SoundtrackList/SoundtrackList";
import {useParams} from "react-router-dom";
import {getAlbumById} from "../../services/api/tracks";
import "./AlbumPage.css"
import {ISoundtrack} from "../../models/Soundtracks";
import {storageUrl} from "../../services/api/consts";
import {Album} from "../../models/Albums";

const AlbumPage = () => {
    const {id}  = useParams()
    const [album, setAlbum] = useState<Album | null>(null)
    const bannerUrl = storageUrl+album?.coverArt?.imageUrl
    const [isLoadingImage, setIsLoadingImage] = useState<boolean>(false)
    useEffect(() => {
        getAlbumById(id)
            .then(album => {
                setAlbum(album.data)
                return album.data
            })
            .catch(error => {
                console.log(error)
            })
    }, []);
    return (
        <div className="playlist__page__wrapper">
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
            {!isLoadingImage && album &&
                <div>
                    <h1 className="playlist__name">{album?.name}</h1>
                    <SoundtrackList soundtracks={album.soundtracks} />
                </div>

            }
        </div>
    );
};

export default AlbumPage;