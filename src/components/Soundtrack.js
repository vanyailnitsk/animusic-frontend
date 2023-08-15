import React from "react";
import { useDispatch } from "react-redux";
import { playTrack, setCurrentTrackId } from "../store/playerActions";

const Soundtrack = ({ soundtrackData }) => {
    const dispatch = useDispatch();

    const playTrackHandler = () => {
        dispatch(playTrack(soundtrackData));
        dispatch(setCurrentTrackId(soundtrackData.pathToFile)); // Установите текущий трек по ID
    };

    return (
        <div className="soundtrack">
            <h2>{soundtrackData.originalTitle}</h2>
            <p>{soundtrackData.animeTitle}</p>
            <button onClick={playTrackHandler}>Воспроизвести</button>
        </div>
    );
};

export default Soundtrack;
