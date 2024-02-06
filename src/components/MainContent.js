import React from 'react';
import '../styles/MainContent.css'
import avatar from '../images/avatar.jpeg'
import DataCore from "./DataCore";

const MainContent = ({page}) => {
    return (
        <div className='main__content__wrapper'>
            <DataCore page={page}/>
        </div>
    );
};

export default MainContent;