import React from 'react';
import PlaylistCard from "./PlaylistCard";
import '../styles/Playlists.css'
import {PlaylistsProps} from "../interfaces/Playlists";
const Playlists = ({playlists,handleNavigate} : PlaylistsProps) => {
    return (
        <div className="playlists">
            {playlists.map(playlist => (
                <PlaylistCard  name={playlist.name} playlist={playlist} handleNavigate={handleNavigate} key={playlist.id}/>
            ))}
        </div>
    );
};

export default Playlists;