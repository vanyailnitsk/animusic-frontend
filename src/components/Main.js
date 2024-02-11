import React, {useEffect, useState} from 'react';
import '../styles/Main.css'
import Navigation from "./Navigation";
import MediaLibrary from "./MediaLibrary";
import MainContent from "./MainContent";


const Main = ({page}) => {
    const [menuActive,setMenuActive] = useState(false)
    return (
        <div className='main__wrapper'>
            <Navigation menuActive={menuActive} setMenuActive={setMenuActive}/>
            <MediaLibrary menuActive={menuActive} setMenuActive={setMenuActive}/>
            <MainContent page={page} setMenuActive={setMenuActive} menuActive={menuActive}/>
        </div>
    );
};

export default Main;