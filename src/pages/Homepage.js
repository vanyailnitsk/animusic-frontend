import React, {useState} from 'react';
import MusicPlayer from "../components/MusicPlayer";

const Homepage = () => {
    const track1 = 'http://localhost:1234/Hunting For Your Dream.mp3';
    const track2= 'http://localhost:1234/Naruto_Shippuden/Opening 3.mp3';
    const [trackUrl,setTrackUrl]= useState(track2);

    const changeTrack = () => {
        if (trackUrl === track1) {
            setTrackUrl(track2);
        }
        else {
            setTrackUrl(track1)
        }
    }
    return (
        <div>

        </div>
    );
};

export default Homepage;