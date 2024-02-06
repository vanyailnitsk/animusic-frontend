import React, {useContext} from "react";
import "../styles/Soundtrack.css";
import {Context} from "../index";
import trackImg from '../images/trackImg.jpeg'
import Pause from '../images/soundtrack-pause.png'
import Play from '../images/soundtrack-play.png'
import addButton from '../images/addButton.png'
import {formatTime} from "../tools/FormatTime";
import {observer} from "mobx-react-lite";
import {soundtrackImageUrl} from "../services/api/consts";


const Soundtrack = observer(({soundtrackData, playlist, index}) => {
    const {musicStore} = useContext(Context)
    const trackImageUrl = soundtrackImageUrl + soundtrackData.id
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
        <div className={`soundtrack__container ${musicStore.trackEquals(soundtrackData) ? "playing" : ""}`}
             onClick={playTrackHandler}>
            <button className="soundtrack__toggle__play">
                <span>{index+1}</span>
                {musicStore.trackEquals(soundtrackData) && musicStore.isPlaying ? (
                    <img src={Pause} alt="Pause"/>
                ) : (
                    <img src={Play} alt="Play"/>
                )}
            </button>
            <img src={trackImageUrl} alt="" className="soundtrack__image"/>
            <h3 className="title">{soundtrackData.animeTitle}</h3>
            <p className="original__title">{soundtrackData.originalTitle}</p>
            <button className="soundtrack__add" onClick={(e) => e.stopPropagation()}>
                <img src={addButton} alt=""/>
            </button>
            <span className='track__duration'>{formatTime(100)}</span>
        </div>
    );
});

export default Soundtrack;
