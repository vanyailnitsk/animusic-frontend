import React, {useEffect, useState} from 'react';
import {getAllSoundtracksByAnimeId} from "../services/api/anime";
import {useParams} from "react-router-dom";
import SoundtrackList from "../components/SoundtrackList";

const AnimePage = () => {
    const {id} = useParams()
    const [soundtracks,setSoundtracks] = useState([])
    useEffect(() => {
        getAllSoundtracksByAnimeId(id).then(data => setSoundtracks(data))
        console.log(soundtracks)
    }, [id]);
    return (
        <div>
            <SoundtrackList soundtracks={soundtracks}/>
        </div>
    );
};

export default AnimePage;