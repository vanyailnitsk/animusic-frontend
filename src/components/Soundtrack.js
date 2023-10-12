import React, {useContext} from "react";
import "../style/Soundtrack.css";
import playButton from "../images/play-button.png"
import pauseButton from "../images/pause-button.png"
import flowSign from "../images/flowSign.jpeg"
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const Soundtrack = observer(({soundtrackData, playlist, index}) => {
    const {musicStore} = useContext(Context)
    const playTrackHandler = () => {
        if (!musicStore.trackEquals(soundtrackData)) {
            musicStore.setPlaylist(playlist)
            musicStore.setTrackIndex(index)
            musicStore.setIsPlaying(true)
        } else {
            musicStore.togglePlayPause()
        }
    };

    return (
        <div className="soundtrack-container">
            <button className="soundtrack-play-button" onClick={playTrackHandler}>
                {musicStore.trackEquals(soundtrackData) && musicStore.isPlaying ? (
                    <img src={pauseButton} alt="Pause"/>
                ) : (
                    <img src={playButton} alt="Play"/>
                )}
            </button>
            <div className="soundtrack-info">
                <img src={flowSign} alt="" className="soundtrack-image"/>
                <p className="soundtrack-anime">{soundtrackData.animeTitle}</p>
                <h3 className="soundtrack-title">{soundtrackData.originalTitle}</h3>

            </div>
        </div>
    );
});

export default Soundtrack;
