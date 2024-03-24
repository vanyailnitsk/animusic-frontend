import React, {useEffect, useState} from 'react';
import SoundtrackList from "../../components/SoundtrackList/SoundtrackList";
import {useParams} from "react-router-dom";
import {getPlaylistById} from "../../services/api/tracks";
import "./PlaylistPage.css"
import {ISoundtrack} from "../../models/Soundtracks";
import {playlistBannerUrl, storageUrl} from "../../services/api/consts";
import {IPlaylist} from "../../models/Playlists";

const PlaylistPage = () => {
    const {id}  = useParams()
    const [playlist, setPlaylist] = useState<IPlaylist | null>(null)
    const bannerUrl = storageUrl+playlist?.bannerLink
    const [isLoadingImage, setIsLoadingImage] = useState<boolean>(false)
    useEffect(() => {
        getPlaylistById(id)
            .then(playlist => {
                setPlaylist(playlist)
                return playlist.soundtracks
            })
            .catch(error => {
                console.log(error)
            })
    }, []);
    return (
        <div className="playlist__page__wrapper">
            <div className='blur'>
                <img src={bannerUrl} alt=""/>
            </div>
            <div className="anime__banner">
                <img
                    src={bannerUrl} alt="Banner"
                    onLoad={() => setIsLoadingImage(false)}
                    onError={() => setIsLoadingImage(false)}
                />
            </div>
            {!isLoadingImage && playlist &&
                <div>
                    <h1 className="playlist__name">{playlist.name}</h1>
                    <SoundtrackList playlist={playlist} />
                </div>

            }
        </div>
    );
};

export default PlaylistPage;