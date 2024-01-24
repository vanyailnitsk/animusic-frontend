import React from 'react';
import '../styles/Navigation.css'
import homeIcon from '../images/home.png'
import searchIcon from '../images/search.png'
const Navigation = () => {
    return (
        <div className='navigation__wrapper'>
            <div className='nav_block'>
                <img style={{width:26}} src={homeIcon} alt=""/>
                <span>Home</span>
            </div>
            <div className='nav_block'>
                <img style={{width:26}} src={searchIcon} alt=""/>
                <span>Search</span>
            </div>
        </div>
    );
};

export default Navigation;