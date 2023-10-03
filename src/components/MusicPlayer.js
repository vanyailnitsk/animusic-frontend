import React, {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentTrackIndex} from "../store/playerActions";
import {Button} from "react-bootstrap";
import "../style/MusicPlayer.css"

const MusicPlayer = () => {
    const audioRef = useRef(null);
    const [volume, setVolume] = useState(0.25);
    //const {currentTrackId} = useSelector((state) => state.player);
    const playlist = useSelector((state) => state.player.playlist);
    const currentTrackIndex = useSelector((state) => state.player.currentTrackIndex);
    const dispatch = useDispatch();
    const audioUrl = process.env.REACT_APP_API_URL + '/soundtracks/play/';
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    useEffect(() => {
        audioRef.current.volume = volume
        if (isPlaying) {
            audioRef.current.play()
        } else {
            audioRef.current.pause()
        }
    }, [isPlaying])

    useEffect(() => {
        const onTimeUpdate = () => {
            setCurrentTime(audioRef.current.currentTime);
            setDuration(audioRef.current.duration);
        };
        audioRef.current.addEventListener("timeupdate", onTimeUpdate);
        return () => {
            audioRef.current.removeEventListener("timeupdate", onTimeUpdate);
        };
    }, []);
    const playPauseHandler = () => {
        setIsPlaying(!isPlaying);
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
    const playNextTrack = () => {
        const nextIndex = currentTrackIndex + 1;
        if (nextIndex < playlist.length) {
            dispatch(setCurrentTrackIndex(nextIndex));
        } else {
            dispatch(setCurrentTrackIndex(0));
        }
    };

    return (
        <div className="music-player-container">
            {playlist[currentTrackIndex] &&
                <p style={{color: 'white'}}>
                    {playlist[currentTrackIndex].animeName + ' - ' + playlist[currentTrackIndex].animeTitle}
                </p>}
            <div>
                <Button size="sm" className="ms-3 play-pause-button" onClick={playPauseHandler}>
                    {isPlaying ? "Pause" : "Play"}
                </Button>
                <audio ref={audioRef}
                       src={playlist[currentTrackIndex] && audioUrl + playlist[currentTrackIndex].id}
                       autoPlay
                       onEnded={playNextTrack}
                       onTimeUpdate={handleTimeUpdate}
                >
                </audio>
                <Button size="sm" className="ms-3" onClick={playNextTrack}>Next</Button>
                <div className="time-bar">
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
                    <div className="volume-bar">
                        <div className="volume-icon">🔊</div>
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
            </div>
        </div>
    );
};

export default MusicPlayer;
