import React from 'react';
import AlbumCard from "../AlbumCard/AlbumCard";
import './Albums.css'
import {AlbumsProps} from "../../models/Albums";
const Albums = ({albums,handleNavigate} : AlbumsProps) => {
    return (
        <div className="playlists">
            {albums.map(album=> (
                <AlbumCard name={album.name} id={album.id} handleNavigate={handleNavigate} key={album.id}/>
            ))}
        </div>
    );
};

export default Albums;