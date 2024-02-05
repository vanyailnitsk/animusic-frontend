import React, {useContext, useEffect, useRef, useState} from "react";

import "../styles/MusicPlayer.css"
import pauseButton from '../images/pauseButton.png'
import rewindButton from '../images/rewindButton.png'
import nextButton from '../images/next.png'
import shuffleButton from '../images/shuffleButton.png'
import playButton from '../images/playButton.png'
import trackImg from '../images/trackImg.jpeg'
import repeatButton from '../images/repeatButton.png'
import addButton from '../images/addButton.png'
import loudSound from '../images/icons8-громкий-звук-100.png'
import mediumSound from '../images/icons8-средняя-громкость-100.png'
import littleSound from '../images/icons8-низкая-громкость-100.png'
import noSound from '../images/icons8-нет-звука-100.png'
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {formatTime} from "../tools/FormatTime";
import {isMobile} from 'react-device-detect';
import repeatButtonActive from '../images/repeatButtonActive.png'

const MusicPlayer = observer(() => {
    const audioRef = useRef(null);
    const [volume, setVolume] = useState(0.25);
    const {musicStore} = useContext(Context)
    const audioUrl = process.env.REACT_APP_API_URL + '/soundtracks/play/';
    const [currentTime, setCurrentTime] = useState(0);
    const [repeatStatus, setrepeatStatus] = useState(false)
    const [duration, setDuration] = useState(0);

    useEffect(() => {
        if (isMobile) {
            setVolume(1);
        }
        if (audioRef) {
            audioRef.current.volume = volume
        }
        if (musicStore.isPlaying) {
            audioRef.current.play()
        } else {
            audioRef.current.pause()
        }
    }, [musicStore.isPlaying])

    useEffect(() => {
        const onTimeUpdate = () => {
            setCurrentTime(audioRef.current.currentTime);
            setDuration(audioRef.current.duration || 0);
        };
        audioRef.current.addEventListener("timeupdate", onTimeUpdate);
        return () => {
            audioRef.current.removeEventListener("timeupdate", onTimeUpdate);
        };
    }, []);
    const playPauseHandler = () => {
        musicStore.togglePlayPause()
    };
    const handlePlay = () => {
        musicStore.setIsPlaying(true)
    };

    const handlePause = () => {
        musicStore.setIsPlaying(false);
    };
    const handleVolumeChange = (event) => {
        const newVolume = parseFloat(event.target.value);
        setVolume(newVolume);

        const audioElement = audioRef.current;
        if (audioElement) {
            audioElement.volume = newVolume;
        }
    };
    const changeVolumeIcon = (volume) =>{
        if (volume ===0){
            return noSound
        }
        else if (volume <= 0.3){
            return littleSound
        }
        else if (volume <= 0.6){
            return mediumSound
        }
        else{
            return loudSound
        }
    }
    const handleTimeUpdate = (event) => {
        setCurrentTime(event.target.currentTime);
    };
    const handleSeek = (event) => {
        const time = event.target.value;
        audioRef.current.currentTime = time;
        setCurrentTime(time);
    };
    const playPreviousTrack = () => {
        if (musicStore.trackIndex > 0 && audioRef.current.currentTime < 4) {
            musicStore.previousTrack()
        } else {
            audioRef.current.currentTime = 0;
            setCurrentTime(0)
        }
    };
    const toggleRepeat = () => {
        if (audioRef.current) {
            audioRef.current.loop = !repeatStatus;
            setrepeatStatus(audioRef.current.loop)
        }
    }
    const playNextTrack = () => {
        musicStore.nextTrack()
    };
    navigator.mediaSession.setActionHandler("nexttrack", () => {
        playNextTrack()
    });
    navigator.mediaSession.setActionHandler("previoustrack", () => {
        playPreviousTrack()
    });
    return (
        <div className="music__player__wrapper">
            <div className='current__track'>
                <img src={trackImg} alt="" className='track__img'/>
                {musicStore.currentTrack &&
                    <div className='track__name'>
                        <span className={musicStore.currentTrack.originalTitle.length > 20? "scrolling" : "" }>{musicStore.currentTrack.originalTitle}</span>
                        <span>{musicStore.currentTrack.animeTitle}</span>
                    </div>
                }
                <img src={addButton} alt="" className='add__track'/>
            </div>
            <div className='player'>
                <div className='player__buttons'>
                    <button><img src={shuffleButton} alt="" style={{width: 24, height: 24}}/></button>
                    <button onClick={playPreviousTrack}><img src={rewindButton} alt="" style={{width: 27, height: 27}}/>
                    </button>
                    <button onClick={playPauseHandler}><img src={musicStore.isPlaying ? pauseButton : playButton} alt=""
                                                            style={{width: 40, height: 40}}/></button>
                    <button onClick={playNextTrack}><img src={nextButton} alt="" style={{width: 27, height: 27}}/>
                    </button>
                    <button onClick={toggleRepeat}><img src={repeatStatus ? repeatButtonActive : repeatButton} alt=""
                                                        style={{width: 27, height: 27}}/></button>
                </div>
                <div className="time__bar">
                    <audio ref={audioRef}
                           src={musicStore.currentTrack && audioUrl + musicStore.currentTrack.id}
                           autoPlay
                           onEnded={playNextTrack}
                           onTimeUpdate={handleTimeUpdate}
                           onPlay={handlePlay}
                           onPause={handlePause}
                           preload="auto"
                    >
                    </audio>
                    <div className="current__time">{formatTime(currentTime)}</div>
                    <div className="progress__bar">
                        <input
                            type="range"
                            min="0"
                            max={duration}
                            step="1"
                            value={currentTime}
                            onChange={handleSeek}
                        />
                    </div>
                    <div className="total__time">{formatTime(duration)}</div>
                </div>
            </div>


            <div className="volume__bar">
                <img className="volume__icon" src={changeVolumeIcon(volume)} alt=""/>
                <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={handleVolumeChange}
                />
            </div>
        </div>
    );
});

export default MusicPlayer;
