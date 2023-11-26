import React, {useEffect, useState} from 'react';
import SoundtrackList from "../components/SoundtrackList";
import {useParams} from "react-router-dom";
import {getPlaylistById} from "../services/api/tracks";
import "../style/PlaylistPage.css"
import hunterxhunterBanner from "../images/hunterxhunter-banner.jpg";
import {animeBannerUrl, playlistBannerUrl} from "../services/api/consts";

const PlaylistPage = () => {
    const {id} = useParams()
    const [playlist, setPlaylist] = useState({})
    const [soundtracks, setSoundtracks] = useState([])
    const bannerUrl = playlistBannerUrl+id;
    const [imageExists, setImageExists] = useState(true);
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
        <div className="main">
            {/*<img src={bannerSrc} alt="" className="anime_image"/>*/}
            <img src={bannerUrl} alt="" className="anime_image"/>
            <h1 className="playlist-name">{playlist.name}</h1>
            <SoundtrackList soundtracks={soundtracks}/>
        </div>
    );
};

export default PlaylistPage;