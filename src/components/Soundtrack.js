import React from "react";
import { useDispatch } from "react-redux";
import { playTrack, setCurrentTrackId } from "../store/playerActions";
import "../style/Soundtrack.css";

const Soundtrack = ({ soundtrackData }) => {
    const dispatch = useDispatch();

    const playTrackHandler = () => {
        dispatch(playTrack(soundtrackData));
        dispatch(setCurrentTrackId(soundtrackData.pathToFile)); // Установите текущий трек по ID
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
