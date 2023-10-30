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
    const soundtrackContainerStyles = () => {
        const classNames = ['soundtrack-container'];
        if (musicStore.trackEquals(soundtrackData) && musicStore.isPlaying) {
            classNames.push('playing');
        }
        return classNames.join(' ');
    }

    return (
        <div className={soundtrackContainerStyles()} onClick={playTrackHandler}>
            <button className="soundtrack-play-button">
                {musicStore.trackEquals(soundtrackData) && musicStore.isPlaying ? (
                    <img src={pauseButton} alt="Pause"/>
                ) : (
                    <img src={playButton} alt="Play"/>
                )}
            </button>
                <img src={flowSign} alt="" className="soundtrack-image"/>
                <h3 className="soundtrack-anime">{soundtrackData.animeTitle}</h3>
                <p className="soundtrack-title">{soundtrackData.originalTitle}</p>
        </div>
    );
});

export default Soundtrack;
