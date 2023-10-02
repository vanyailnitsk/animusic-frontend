import React, {useEffect, useState} from 'react';
import soundtrack from "../components/Soundtrack";
import Soundtrack from "../components/Soundtrack";
import SoundtrackList from "../components/SoundtrackList";
import {useParams} from "react-router-dom";
import {getPlaylistById} from "../services/api/tracks";

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
    }, []);
    return (
        <div>
            <h1>{playlist.name}</h1>
            <SoundtrackList soundtracks={soundtracks}/>
        </div>
    );
};

export default PlaylistPage;