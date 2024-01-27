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
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import { isMobile } from 'react-device-detect';
import MusicStore from "../store/MusicStore";

const MusicPlayer = observer(() => {
    const audioRef = useRef(null);
    const [volume, setVolume] = useState(0.25);
    const {musicStore} = useContext(Context)
    const audioUrl = process.env.REACT_APP_API_URL + '/soundtracks/play/';
    const [currentTime, setCurrentTime] = useState();
    const [duration, setDuration] = useState(0);

    useEffect(() => {
        if (isMobile) {
            setVolume(1);
        }
        audioRef.current.volume = volume
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

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
    };
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
        }
        else {
            audioRef.current.currentTime = 0;
            setCurrentTime(0)
        }
    };
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
                <div className='track__name'>
                    <span>Opening 6</span>
                    <span>My War</span>
                </div>
                <img src={addButton} alt="" className='add__track'/>
            </div>
            <div className='player'>
                <div className='player__buttons'>
                    <img src={shuffleButton} alt="" style={{width:24,height:24}}/>
                    <img src={rewindButton} alt="" style={{width:27,height:27}}/>
                    <img src={musicStore.isPlaying? pauseButton : playButton} alt="" style={{width:40,height:40}}/>
                    <img src={nextButton} alt="" style={{width:27,height:27}}/>
                    <img src={repeatButton} alt="" style={{width:27,height:27}}/>
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
                    <div className="total-time">{formatTime(duration)}</div>
                </div>
            </div>

            {/*<div className="info-timebar">*/}

            {/*</div>*/}
            {/*<div className="volume-bar">*/}
            {/*    <img className="volume-icon" src='' alt=""/>*/}
            {/*    <input*/}
            {/*        type="range"*/}
            {/*        min="0"*/}
            {/*        max="1"*/}
            {/*        step="0.01"*/}
            {/*        value={volume}*/}
            {/*        onChange={handleVolumeChange}*/}
            {/*        className="volume-progress"*/}
            {/*    />*/}
            {/*</div>*/}
        </div>
    );
});

export default MusicPlayer;
