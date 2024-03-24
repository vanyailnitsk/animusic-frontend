import React, {useContext} from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import Main from "../components/Main/Main";
import Homepage from '../pages/Home/Homepage';
import AnimePage from '../pages/AnimePage/AnimePage';
import {
    ANIME_MANAGE,
    ANIME_ROUTE, FAVORITES,
    HOME_ROUTE,
    LOGIN,
    PLAYLIST_ROUTE,
    SEARCH_ROUTE,
    SIGN_UP,
    SOUNDTRACK_MANAGE
} from "./routes";
import PlaylistPage from "../pages/PlaylistPage/PlaylistPage";
import MusicPlayer from "../components/MusicPlayer/MusicPlayer";
import SoundtrackManager from "../pages/SoundtrackManager";
import AnimeManager from "../pages/AnimeManager";
import SearchPage from "../pages/SearchPage/SearchPage";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";
import PrivateRoute from "./privateRoute";
import {Context} from "../index";
import UserPlaylistPage from "../pages/UserPlaylistPage/UserPlaylistPage";

function AppRouter() {
    const {userStore} = useContext(Context)
    return (
        <SkeletonTheme baseColor="#313131" highlightColor="#525252">
        <BrowserRouter>
            <MusicPlayer/>
                <Routes>
                    <Route path={LOGIN} element={userStore.isAuth? <Navigate to={HOME_ROUTE} replace /> : <Login />} />
                    <Route path={SIGN_UP} element={userStore.isAuth? <Navigate to={HOME_ROUTE} replace /> : <SignUp />} />
                    <Route element={<PrivateRoute/>}>
                        <Route path={HOME_ROUTE} element={<Main page={<Homepage/>}/>}/>
                        <Route path={ANIME_ROUTE} element={<Main page={<AnimePage/>}/>}/>
                        <Route path={ANIME_MANAGE} element={<Main page={<AnimeManager/>}/>}/>
                        <Route path={PLAYLIST_ROUTE} element={<Main page={<PlaylistPage/>}/>}/>
                        <Route path={SOUNDTRACK_MANAGE} element={<Main page={<SoundtrackManager/>}/>}/>
                        <Route path={SEARCH_ROUTE} element={<Main page={<SearchPage/>}/>}/>
                        <Route path={FAVORITES} element={<Main page={<UserPlaylistPage/>}/>}/>
                    </Route>
                </Routes>
        </BrowserRouter>
        </SkeletonTheme>
    );
}

export default AppRouter;
