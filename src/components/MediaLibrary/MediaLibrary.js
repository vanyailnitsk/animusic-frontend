import React from 'react';
import './MediaLibrary.css'
const MediaLibrary = ({menuActive}) => {
    return (
        <div className={menuActive? 'media__library__wrapper menu__active' : 'media__library__wrapper'}>

        </div>
    );
};

export default MediaLibrary;