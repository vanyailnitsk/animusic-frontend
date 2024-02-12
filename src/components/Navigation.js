import React from 'react';
import '../styles/Navigation.css'
import homeIcon from '../images/home.png'
import searchIcon from '../images/search.png'
import {useNavigate} from "react-router-dom";
import {HOME_ROUTE, SEARCH_ROUTE} from "../navigation/routes";
import close from "../images/close.png";
const Navigation = ({menuActive,setMenuActive}) => {
    const navigate = useNavigate();
    const handleRoute = (route) =>{
        navigate(route)
        setMenuActive(false)
    }
    return (
        <div className={menuActive? 'navigation__wrapper menu__active' : 'navigation__wrapper'}>

            <div className="nav__block">
                <div className='nav_title' onClick={() =>handleRoute(HOME_ROUTE)}>
                    <img style={{width:26}} src={homeIcon} alt=""/>
                    <span>Home</span>
                </div>
                <div className='nav_title' onClick={() => handleRoute(SEARCH_ROUTE)}>
                    <img style={{width:26}} src={searchIcon} alt=""/>
                    <span>Search</span>
                </div>
            </div>
        </div>
    );
};

export default Navigation;