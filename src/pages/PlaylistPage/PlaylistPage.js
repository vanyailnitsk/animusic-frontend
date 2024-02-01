import React, {useEffect, useState} from 'react';
import SoundtrackList from "../../components/SoundtrackList";
import {useParams} from "react-router-dom";
import {getPlaylistById} from "../../services/api/tracks";
import "./PlaylistPage.css"
import {playlistBannerUrl} from "../../services/api/consts";
import defaultBanner from "../../images/defaultBanner.jpg";

const PlaylistPage = () => {
    const {id} = useParams()
    const [playlist, setPlaylist] = useState({})
    const [soundtracks, setSoundtracks] = useState([])
    const bannerUrl = playlistBannerUrl + id;
    const [isLoadingImage, setIsLoadingImage] = useState(true)
    useEffect(() => {
        getPlaylistById(id)
            .then(data => {
                setPlaylist(data)
                return data.soundtracks
            })
            .then(soundtracksData => {
                setSoundtracks(soundtracksData);
            })
            .catch(error => {
                console.log(error)
            })
    }, []);
    return (
        <div className="playlist__page__wrapper">
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
                    <h1 className="playlist__name">{playlist.name}</h1>
                    <SoundtrackList soundtracks={soundtracks}/>
                </div>
            }
        </div>
    );
};

export default PlaylistPage;