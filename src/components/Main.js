import React from 'react';
import '../styles/Main.css'
import Navigation from "./Navigation";
import MediaLibrary from "./MediaLibrary";
import MainContent from "./MainContent";
const Main = () => {
    return (
        <div className='main__wrapper'>
            <Navigation/>
            <MediaLibrary/>
            <MainContent/>
        </div>
    );
};

export default Main;