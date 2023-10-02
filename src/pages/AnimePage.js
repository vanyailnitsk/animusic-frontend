import React, {useEffect, useState} from 'react';
import { getAnimeInfo} from "../services/api/anime";
import {useParams} from "react-router-dom";
import SoundtrackList from "../components/SoundtrackList";
import {trackTypes, trackTypeToName} from "../services/consts";
import hunterxhunterBanner from "../images/hunterxhunter-banner.jpg"
import "../style/AnimePage.css"
import {getPlaylistsByAnimeId} from "../services/api/tracks";
import data from "bootstrap/js/src/dom/data";
import Soundtrack from "../components/Soundtrack";

const AnimePage = () => {
    const {id} = useParams()
    const [soundtracks,setSoundtracks] = useState([])
    const [animeData,setAnimeData] = useState({})
    const [playlists,setPlaylists] = useState([])
    useEffect(() => {
        getAnimeInfo(id)
            .then(data => {
                setAnimeData(data.data);
                return data.data.soundtracks;
            })
            .then(soundtracksData => {
                setSoundtracks(soundtracksData);
            });
        getPlaylistsByAnimeId(id)
            .then(data => {
                console.log(data)
                setPlaylists(data)
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
        <div className="main_page">
            <img src={hunterxhunterBanner} alt="" className="anime_image"/>
            <div className='buttons'>
                <button className="play_btn">PLAY</button>
                <button className="follow_btn">FOLLOW</button>
            </div>
            <div className="playlists">
                {playlists.map(playlist => (
                    <button>{playlist.name}</button>
                ))}
                {/*<button>OPENINGS</button>*/}
                {/*<button>ENDINGS</button>*/}
                {/*<button>THEMES</button>*/}
                {/*<button>SCENES</button>*/}
            </div>
            <SoundtrackList soundtracks={soundtracks}/>
        </div>
    );
};

export default AnimePage;