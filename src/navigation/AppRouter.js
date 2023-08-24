import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Homepage from '../pages/Homepage';
import AnimePage from '../pages/AnimePage';
import UploadSoundtrack from "../modals/UploadSoundtrack";
import CreateSoundtrack from "../modals/CreateSoundtrack";
import {CREATE_ANIME, CREATE_SOUNDTRACK_FROM_FILE, CREATE_SOUNDTRACK_FROM_YOUTUBE, HOME_ROUTE} from "./routes";
import CreateAnime from "../modals/CreateAnime";
import NavBar from "./NavBar";

function AppRouter() {
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path={HOME_ROUTE} element={<Homepage/>}/>
                <Route path={CREATE_SOUNDTRACK_FROM_FILE} element={<UploadSoundtrack/>}/>
                <Route path={CREATE_SOUNDTRACK_FROM_YOUTUBE} element={<CreateSoundtrack/>}/>
                <Route path='/anime/:id' element={<AnimePage/>}/>
                <Route path={CREATE_ANIME} element={<CreateAnime/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;
