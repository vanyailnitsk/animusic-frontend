import React, {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentTrackIndex} from "../store/playerActions";
import {Button} from "react-bootstrap";

const MusicPlayer = () => {
    const audioRef = useRef(null);
    const [volume, setVolume] = useState(0.25);
    //const {currentTrackId} = useSelector((state) => state.player);
    const playlist = useSelector((state) => state.player.playlist);
    const currentTrackIndex = useSelector((state) => state.player.currentTrackIndex);
    const dispatch = useDispatch();
    const [isPlaying] = useState(false)

    useEffect(() => {
        audioRef.current.volume = volume
        if (isPlaying) {
            audioRef.current.play()
        }
        else {
            audioRef.current.pause()
        }
    },[isPlaying])
    const handleVolumeChange = (event) => {
        const newVolume = parseFloat(event.target.value);
        setVolume(newVolume);

        const audioElement = audioRef.current;
        if (audioElement) {
            audioElement.volume = newVolume;
        }
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
        <div>
            {playlist[currentTrackIndex] &&
                <p style={{ color: 'white' }}>
                    {playlist[currentTrackIndex].animeName+' - '+playlist[currentTrackIndex].animeTitle}
                </p>}
            <div>
                    <audio ref={audioRef}
                           src={playlist[currentTrackIndex] && process.env.REACT_APP_AUDIO_URL+playlist[currentTrackIndex].pathToFile} controls autoPlay
                            onEnded={playNextTrack}
                    >

                    </audio>
            </div>
            <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                className="volume-slider"
            />
            <Button size="sm" className="ms-3" onClick={playNextTrack}>Next</Button>
        </div>
    );
};

export default MusicPlayer;
