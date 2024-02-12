import React from 'react';
import '../styles/DataCore.css'
import avatar from "../icons/avatar.jpeg";

const DataCore = ({page,setMenuActive}) => {

    return (
        <div className='data__core__wrapper'>
            <div className='profile__picture__wrapper'>
                <img src={avatar} alt="" style={{width:'100%',display:'block'}}/>
            </div>
            {page}
        </div>
    );
};

export default DataCore;