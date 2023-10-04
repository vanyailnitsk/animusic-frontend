import React from "react";
import { useDispatch } from "react-redux";
import {playTrack, setCurrentPlaylist} from "../store/playerActions";
import "../style/Soundtrack.css";
import playButton from "../images/play-button.png"
const Soundtrack = ({ soundtrackData,playlist,index }) => {
    const dispatch = useDispatch();

    const playTrackHandler = () => {
        dispatch(setCurrentPlaylist(playlist))
        dispatch(playTrack(index));
    };

    return (
        <div className="soundtrack-container">
            <div className="soundtrack-info">
                <button className="soundtrack-play-button" onClick={playTrackHandler}>
                    <img src={playButton} alt=""/>
                </button>
                <p className="soundtrack-anime">{soundtrackData.animeTitle}</p>
                <h3 className="soundtrack-title">{soundtrackData.originalTitle}</h3>

            </div>
        </div>
    );
};

export default Soundtrack;
