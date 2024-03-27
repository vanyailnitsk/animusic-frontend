import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {FAVORITES} from "../../navigation/routes";
import SoundtrackList from "../../components/SoundtrackList/SoundtrackList";
import {getFavoritesTracks} from "../../services/api/tracks";


const UserPlaylistPage = () => {
    const location = useLocation()
    const [playlist, setPlaylist] = useState()
    useEffect(() => {
        if (location.pathname === FAVORITES){
            getFavoritesTracks()
                .then(playlist => {
                    setPlaylist(playlist)
                    return playlist.soundtracks
                })
                .catch(error => {
                console.log(error)
            })
        }
    }, []);
    return (
        <div>
            {playlist &&
                <div>
                    <SoundtrackList playlist={playlist} />
                </div>

            }
        </div>
    );
};

export default UserPlaylistPage;