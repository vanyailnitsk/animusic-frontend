import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {FAVORITES} from "../../navigation/routes";
import SoundtrackList from "../../components/SoundtrackList/SoundtrackList";
import {getFavorites} from "../../services/api/tracks";
import {Playlist} from "../../models/UserPlaylists";


const UserPlaylistPage = () => {
    const location = useLocation()
    const [playlist, setPlaylist] = useState<Playlist | null>(null)
    useEffect(() => {
        if (location.pathname === FAVORITES){
            getFavorites()
                .then(response => {
                    setPlaylist(response.data)
                    return response.data.soundtracks
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
                    <SoundtrackList soundtracks={playlist.soundtracks} />
                </div>

            }
        </div>
    );
};

export default UserPlaylistPage;