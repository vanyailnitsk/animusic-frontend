import React, {useEffect, useRef, useState} from "react";
import {useSelector} from "react-redux";

const MusicPlayer = () => {
    const audioRef = useRef(null);
    const [volume, setVolume] = useState(0.25);
    //const {currentTrackId} = useSelector((state) => state.player);
    const {currentTrack} = useSelector(state => state.player)
    const [isPlaying,setIsPlaying] = useState(false)

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
    return (
        <div>
            {currentTrack &&
                <p style={{ color: 'white' }}>{currentTrack.animeName+' - '+currentTrack.animeTitle}</p>}
            <div>
                    <audio ref={audioRef}
                           src={currentTrack && process.env.REACT_APP_AUDIO_URL+currentTrack.pathToFile} controls autoPlay
                            onEnded={() => audioRef.current.play()}
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
        </div>
    );
};

export default MusicPlayer;
