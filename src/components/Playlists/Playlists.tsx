import React from 'react';
import PlaylistCard from "../PlaylistCard/PlaylistCard";
import './Playlists.css'
import {PlaylistsProps} from "../../models/Playlists";
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