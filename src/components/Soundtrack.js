import React, {useContext} from "react";
import "../styles/Soundtrack.css";
import {Context} from "../index";
import trackImg from '../images/trackImg.jpeg'
import Pause from '../images/soundtrack-pause.png'
import Play from '../images/soundtrack-play.png'
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
        if (musicStore.trackEquals(soundtrackData)) {
            classNames.push('playing');
        }
        return classNames.join(' ');
    }

    return (
        <div className={soundtrackContainerStyles()} onClick={playTrackHandler}>
            <button className="soundtrack__toggle__play">
                {musicStore.trackEquals(soundtrackData) && musicStore.isPlaying ? (
                    <img src={Pause} alt="Pause"/>
                ) : (
                    <img src={Play} alt="Play"/>
                )}
            </button>
                <img src={trackImg} alt="" className="soundtrack-image"/>
                <h3 className="soundtrack-anime">{soundtrackData.animeTitle}</h3>
                <p className="soundtrack-title">{soundtrackData.originalTitle}</p>
        </div>
    );
});

export default Soundtrack;
