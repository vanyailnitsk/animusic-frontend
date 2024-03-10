import React, {useContext} from "react";
import "../styles/Soundtrack.css";
import {Context} from "../index";
import Pause from '../icons/soundtrack-pause.png'
import Play from '../icons/soundtrack-play.png'
import addButton from '../icons/addButton.png'
import {formatTime} from "../tools/FormatTime";
import {observer} from "mobx-react-lite";
import {SoundtrackProps} from "../interfaces/Soundtracks";
import {soundtrackImageUrl, storageUrl} from "../services/api/consts";


const Soundtrack = observer(({soundtrackData, playlist, index} : SoundtrackProps) => {
    const musicStore = useContext(Context)
    const image = storageUrl + (soundtrackData.imageFile || "images/track-img.jpeg")
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
            <img src={image} alt="" className="soundtrack__image"/>
            <h3 className="title">{soundtrackData.animeTitle}</h3>
            <p className="original__title">{soundtrackData.originalTitle}</p>
            <button className="soundtrack__add" onClick={(e) => e.stopPropagation()}>
                <img src={addButton} alt=""/>
            </button>
            <span className='track__duration'>{formatTime(soundtrackData.duration)}</span>
        </div>
    );
});

export default Soundtrack;
