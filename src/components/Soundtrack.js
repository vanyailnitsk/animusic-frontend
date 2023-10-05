import React, {useState} from "react";
import { useDispatch } from "react-redux";
import {playTrack, setCurrentPlaylist} from "../store/playerActions";
import "../style/Soundtrack.css";
import playButton from "../images/play-button.png"
import pauseButton from "../images/pause-button.png"
import flowSign from "../images/flowSign.jpeg"
const Soundtrack = ({ soundtrackData,playlist,index }) => {
    const dispatch = useDispatch();
    const [isPlaying, setIsPlaying] = useState(false);
    const playTrackHandler = () => {
        dispatch(setCurrentPlaylist(playlist))
        dispatch(playTrack(index));
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="soundtrack-container">
            <button className="soundtrack-play-button" onClick={playTrackHandler}>
                {isPlaying ? (
                    <img src={pauseButton} alt="Pause" />
                ) : (
                    <img src={playButton} alt="Play" />
                )}
            </button>
            <div className="soundtrack-info">
                <img src={flowSign} alt="" className="soundtrack-image"/>
                <p className="soundtrack-anime">{soundtrackData.animeTitle}</p>
                <h3 className="soundtrack-title">{soundtrackData.originalTitle}</h3>

            </div>
        </div>
    );
};

export default Soundtrack;
