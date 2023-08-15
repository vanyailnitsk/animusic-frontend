import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Homepage from './pages/Homepage';
import AnimePage from './pages/AnimePage';
import UploadSoundtrack from "./modals/UploadSoundtrack";
import {PlayerProvider} from "./context/PlayerContext";

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/upload" element={<UploadSoundtrack/>}/>
                <Route path='/anime/:id' element={<AnimePage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;
