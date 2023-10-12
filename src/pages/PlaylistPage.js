import React, {useEffect, useState} from 'react';
import soundtrack from "../components/Soundtrack";
import Soundtrack from "../components/Soundtrack";
import SoundtrackList from "../components/SoundtrackList";
import {useParams} from "react-router-dom";
import {getPlaylistById} from "../services/api/tracks";
import "../style/PlaylistPage.css"
import hunterxhunterBanner from "../images/hunterxhunter-banner.jpg";

const PlaylistPage = () => {
    const {id} = useParams()
    const [playlist,setPlaylist] = useState({})
    const [soundtracks,setSoundtracks] = useState([])
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
    }, [id]);
    return (
        <div className="main">
            <img src={hunterxhunterBanner} alt="" className="anime_image"/>
            <h1 className="playlist-name">{playlist.name}</h1>
            <SoundtrackList soundtracks={soundtracks}/>
        </div>
    );
};

export default PlaylistPage;