import React, {useState} from 'react';
import '../styles/Main.css'
import Navigation from "./Navigation";
import MediaLibrary from "./MediaLibrary";
import MainContent from "./MainContent";


const Main = ({page}) => {
    const [menuActive,setMenuActive] = useState(false)
    const closeMenu = (e) => {
        if (menuActive && e.target === e.currentTarget){
            setMenuActive(false)
        }
    }
    return (
        <div className='main__wrapper' onClick={closeMenu}>
            <Navigation menuActive={menuActive} setMenuActive={setMenuActive} />
            <MediaLibrary menuActive={menuActive} setMenuActive={setMenuActive}/>
            <MainContent page={page} setMenuActive={setMenuActive} menuActive={menuActive}/>
        </div>
    );
};

export default Main;