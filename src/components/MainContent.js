import React from 'react';
import '../styles/MainContent.css'
import avatar from '../images/avatar.jpeg'
import DataCore from "./DataCore";

const MainContent = ({page}) => {
    return (
        <div className='main__content__wrapper'>
            <div className='profile__picture__wrapper'>
                <img src={avatar} alt="" style={{width:'100%',display:'block'}}/>
            </div>
            <DataCore page={page}/>
        </div>
    );
};

export default MainContent;