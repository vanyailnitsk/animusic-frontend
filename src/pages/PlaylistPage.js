import React, {useEffect, useState} from 'react';
import soundtrack from "../components/Soundtrack";
import Soundtrack from "../components/Soundtrack";
import SoundtrackList from "../components/SoundtrackList";
import {useParams} from "react-router-dom";
import {getPlaylistById} from "../services/api/tracks";

const PlaylistPage = () => {
    const {id} = useParams()
    const [playlist,setPlaylist] = useState({})
    useEffect(() => {
        getPlaylistById(id)
            .then(data => {
                setPlaylist(data)
            }).catch(console.log("error"))
    }, []);
    return (
        <div>
            <h1>{playlist.name}</h1>
            <SoundtrackList soundtracks={playlist.soundtracks}/>
        </div>
    );
};

export default PlaylistPage;