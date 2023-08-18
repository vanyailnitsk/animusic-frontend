import React, {useEffect, useState} from 'react';
import { getAnimeInfo} from "../services/api/anime";
import {useParams} from "react-router-dom";
import SoundtrackList from "../components/SoundtrackList";

const AnimePage = () => {
    const {id} = useParams()
    const [soundtracks,setSoundtracks] = useState([])
    const [animeData,setAnimeData] = useState({})
    useEffect(() => {
        getAnimeInfo(id)
            .then(data => {
                setAnimeData(data.data);
                return data.data.soundtracks;
            })
            .then(soundtracksData => {
                setSoundtracks(soundtracksData);
            });
    }, [id]);
    return (
        <div>
            <h1>{animeData.title}</h1>
            <SoundtrackList soundtracks={soundtracks}/>
        </div>
    );
};

export default AnimePage;