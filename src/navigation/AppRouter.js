import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Main from "../components/Main";
import Homepage from '../pages/Home/Homepage';
import AnimePage from '../pages/AnimePage/AnimePage';
import {ANIME_MANAGE, ANIME_ROUTE, HOME_ROUTE, PLAYLIST_ROUTE, SOUNDTRACK_MANAGE} from "./routes";
import PlaylistPage from "../pages/PlaylistPage/PlaylistPage";
import MusicPlayer from "../components/MusicPlayer";
import SoundtrackManager from "../pages/SoundtrackManager";
import AnimeManager from "../pages/AnimeManager";

function AppRouter() {
    return (
        <BrowserRouter>
            <MusicPlayer/>
            <Routes>
                <Route path={HOME_ROUTE} element={<Main page={<Homepage/>}/>}/>
                <Route path={ANIME_ROUTE} element={<Main page={<AnimePage/>}/>}/>
                <Route path={ANIME_MANAGE} element={<Main page={<AnimeManager/>}/>}/>
                <Route path={PLAYLIST_ROUTE} element={<Main page={<PlaylistPage/>}/>}/>
                <Route path={SOUNDTRACK_MANAGE} element={<Main page={<SoundtrackManager/>}/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;
