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
                soundtracksData.sort((a, b) => a.animeTitle.localeCompare(b.animeTitle));
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
        <div className="ms-2">
            <h1>{animeData.title}</h1>
            {Object.keys(groupedSoundtracks).map((category) => (
                <div key={category}>
                    <h2>{category}</h2>
                    <SoundtrackList soundtracks={groupedSoundtracks[category]} />
                </div>
            ))}
        </div>
    );
};

export default AnimePage;