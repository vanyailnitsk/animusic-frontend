import React, {useEffect, useState} from 'react';
import SoundtrackList from "../../components/SoundtrackList";
import {useParams} from "react-router-dom";
import {getPlaylistById} from "../../services/api/tracks";
import "./PlaylistPage.css"
import {playlistBannerUrl} from "../../services/api/consts";

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
        <div className="playlist-page">
            <img
                src={bannerUrl}
                alt="Banner"
                className="anime_image"
                onLoad={() => setIsLoadingImage(false)}
            />
            {!isLoadingImage &&
                <div>
                    <h1 className="playlist-name">{playlist.name}</h1>
                    <SoundtrackList soundtracks={soundtracks}/>
                </div>
            }
        </div>
    );
};

export default PlaylistPage;