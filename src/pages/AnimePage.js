import React, {useEffect, useState} from 'react';
import { getAnimeInfo} from "../services/api/anime";
import {useParams} from "react-router-dom";
import SoundtrackList from "../components/SoundtrackList";
import {trackTypes, trackTypeToName} from "../services/consts";
import "../style/AnimePage.css"

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

    const groupedSoundtracks = soundtracks.reduce((groups, soundtrack) => {
        if (!groups[soundtrack.type]) {
            groups[soundtrack.type] = [];
        }
        groups[soundtrack.type].push(soundtrack);
        return groups;
    }, {});

    return (
        <div className="music_list">
            <h1>{animeData.title}</h1>
            {trackTypes.map((category) => (
                groupedSoundtracks[category] && (
                    <div key={category}>
                        <h2>{trackTypeToName[category]}</h2>
                        <SoundtrackList soundtracks={groupedSoundtracks[category]} />
                    </div>
                )
            ))}
        </div>
    );
};

export default AnimePage;