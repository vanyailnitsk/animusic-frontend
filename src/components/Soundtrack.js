import React from "react";
import { useDispatch } from "react-redux";
import {playTrack, setCurrentPlaylist} from "../store/playerActions";
import "../style/Soundtrack.css";

const Soundtrack = ({ soundtrackData,playlist,index }) => {
    const dispatch = useDispatch();

    const playTrackHandler = () => {
        dispatch(setCurrentPlaylist(playlist))
        dispatch(playTrack(index));
    };

    return (
        <div className="soundtrack-container">
            <button className="soundtrack-play-button" onClick={playTrackHandler}>
                Play
            </button>
            <div className="soundtrack-info">
                <h3 className="soundtrack-title">{soundtrackData.originalTitle}</h3>
                <p className="soundtrack-anime">{soundtrackData.animeTitle}</p>
            </div>
        </div>
    );
};

export default Soundtrack;
