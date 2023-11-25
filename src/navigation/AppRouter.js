import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Homepage from '../pages/Homepage';
import AnimePage from '../pages/AnimePage';
import UploadSoundtrack from "../modals/UploadSoundtrack";
import CreateSoundtrack from "../modals/CreateSoundtrack";
import {
    CREATE_ANIME,
    CREATE_SOUNDTRACK_FROM_FILE,
    CREATE_SOUNDTRACK_FROM_YOUTUBE,
    HOME_ROUTE,
    PLAYLIST_ROUTE, SOUNDTRACK_MANAGE
} from "./routes";
import CreateAnime from "../modals/CreateAnime";
import NavBar from "./NavBar";
import PlaylistPage from "../pages/PlaylistPage";
import MusicPlayer from "../components/MusicPlayer";
import SoundtrackManager from "../pages/SoundtrackManager";
import AnimeManager from "../pages/AnimeManager";

function AppRouter() {
    return (
        <BrowserRouter>
            <NavBar/>
            <MusicPlayer/>
            <Routes>
                <Route path={HOME_ROUTE} element={<Homepage/>}/>
                <Route path={CREATE_SOUNDTRACK_FROM_FILE} element={<UploadSoundtrack/>}/>
                <Route path={CREATE_SOUNDTRACK_FROM_YOUTUBE} element={<CreateSoundtrack/>}/>
                <Route path='/anime/:id' element={<AnimePage/>}/>
                <Route path={CREATE_ANIME} element={<AnimeManager/>}/>
                <Route path={PLAYLIST_ROUTE} element={<PlaylistPage/>}/>
                <Route path={SOUNDTRACK_MANAGE} element={<SoundtrackManager/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;
