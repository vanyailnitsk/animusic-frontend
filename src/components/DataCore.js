import React from 'react';
import '../styles/DataCore.css'
import {useLocation} from "react-router-dom";
import Homepage from "../pages/Home/Homepage";
import {HOME_ROUTE} from "../navigation/routes";
import PlaylistPage from "../pages/PlaylistPage/PlaylistPage";
const DataCore = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    return (
        <div className='data__core__wrapper'>
            {currentPath === HOME_ROUTE
                ?<div><Homepage/></div>
                : null
            }
            <PlaylistPage/>
        </div>
    );
};

export default DataCore;