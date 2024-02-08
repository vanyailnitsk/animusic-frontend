import React from 'react';
import PlaylistCard from "./PlaylistCard";
import '../styles/Playlists.css'
const Playlists = ({playlists,handleNavigate}) => {
    return (
        <div className="playlists">
            {playlists.map(playlist => (
                <PlaylistCard  name={playlist.name} playlist={playlist} handleNavigate={handleNavigate} key={playlist.id}/>
            ))}
        </div>
    );
};

export default Playlists;