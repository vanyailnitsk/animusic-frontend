import React from 'react';
import '../styles/Navigation.css'
import homeIcon from '../images/home.png'
import searchIcon from '../images/search.png'
import {useNavigate} from "react-router-dom";
import {HOME_ROUTE, SEARCH__ROUTE} from "../navigation/routes";
const Navigation = () => {
    const navigate = useNavigate();
    return (
        <div className='navigation__wrapper'>
            <div className="nav__block">
                <div className='nav_title' onClick={() => navigate(HOME_ROUTE)}>
                    <img style={{width:26}} src={homeIcon} alt=""/>
                    <span>Home</span>
                </div>
                <div className='nav_title' onClick={() => navigate(SEARCH__ROUTE)}>
                    <img style={{width:26}} src={searchIcon} alt=""/>
                    <span>Search</span>
                </div>
            </div>
        </div>
    );
};

export default Navigation;