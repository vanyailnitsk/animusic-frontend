import React, {useEffect, useMemo, useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from "../components/Main";
import Homepage from '../pages/Home/Homepage';
import AnimePage from '../pages/AnimePage/AnimePage';
import UploadSoundtrack from "../modals/UploadSoundtrack";
import CreateSoundtrack from "../modals/CreateSoundtrack";
import {
    ANIME_MANAGE,
    CREATE_ANIME,
    CREATE_SOUNDTRACK_FROM_FILE,
    CREATE_SOUNDTRACK_FROM_YOUTUBE,
    HOME_ROUTE,
    PLAYLIST_ROUTE, SOUNDTRACK_MANAGE
} from "./routes";
import CreateAnime from "../modals/CreateAnime";
import PlaylistPage from "../pages/PlaylistPage/PlaylistPage";
import MusicPlayer from "../components/MusicPlayer";
import SoundtrackManager from "../pages/SoundtrackManager";
import AnimeManager from "../pages/AnimeManager";
import {getAnimeNavs} from "../services/api/anime";
import DataCore from "../components/DataCore";

function AppRouter() {
    return (
        <BrowserRouter>
            <Main/>
            <MusicPlayer/>
            <Routes>
                <Route path={CREATE_SOUNDTRACK_FROM_FILE} element={<UploadSoundtrack/>}/>
                <Route path={CREATE_SOUNDTRACK_FROM_YOUTUBE} element={<CreateSoundtrack/>}/>
                <Route path='/anime/:id' element={<AnimePage/>}/>
                <Route path={ANIME_MANAGE} element={<AnimeManager/>}/>
                <Route path={PLAYLIST_ROUTE} element={<PlaylistPage/>}/>
                <Route path={SOUNDTRACK_MANAGE} element={<SoundtrackManager/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;
