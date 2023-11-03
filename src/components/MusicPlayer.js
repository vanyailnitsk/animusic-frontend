import React, {useContext, useEffect, useRef, useState} from "react";
import pauseButton from "../images/pause-button.png"
import playButton from "../images/play-button.png"
import nextButton from "../images/next-button.png"
import previousButton from "../images/previous-button.png"
import volumeIcon from "../images/volume-icon.png"
import "../style/MusicPlayer.css"
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import { isMobile } from 'react-device-detect';

const MusicPlayer = observer(() => {
    const audioRef = useRef(null);
    const [volume, setVolume] = useState(0.25);
    const {musicStore} = useContext(Context)
    const audioUrl = process.env.REACT_APP_API_URL + '/soundtracks/play/';
    const [currentTime, setCurrentTime] = useState(0);
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
        <div className="music-player-container">
            <div className="player-buttons">
                <button className="player-previous-button"  onClick={playPreviousTrack}>
                    <img src={previousButton} alt=""/>
                </button>
                <button className="player-play-pause-button" onClick={playPauseHandler}>{musicStore.isPlaying ? (
                    <img src={pauseButton} alt="Pause" />
                ) : (
                    <img src={playButton} alt="Play" />
                )}</button>
            <button className="player-next-button"  onClick={playNextTrack}>
                <img src={nextButton} alt=""/>
            </button>
            </div>
            <div className="info-timebar">
                {musicStore.currentTrack &&
                    <p style={{color: 'white'}} className="player-name-track">
                        {musicStore.currentTrack.animeName + ' - ' + musicStore.currentTrack.animeTitle}
                    </p>}
                <div className="time-bar">
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
                    <div className="current-time">{formatTime(currentTime)}</div>
                        <div className="progress-bar">
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
            <div className="volume-bar">
                <img className="volume-icon" src={volumeIcon} alt=""/>
                <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={handleVolumeChange}
                    className="volume-progress"
                />
            </div>
        </div>
    );
});

export default MusicPlayer;
