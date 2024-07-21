import styles from './navigation.module.css'
import homeIcon from '@/shared/icons/home.png'
import searchIcon from '@/shared/icons/search.png'
import {useNavigate} from "react-router-dom";
import {HOME_ROUTE, SEARCH_ROUTE} from "@/app/routers";

export const Navigation = ({menuActive, setMenuActive}) => {
    const navigate = useNavigate();
    const handleRoute = (route) =>{
        navigate(route)
        setMenuActive(false)
    }
    return (
        <div className={menuActive? 'navigation__wrapper menu__active' : 'navigation__wrapper'}>

            <div className={styles.nav__block}>
                <div className={styles.nav_title} onClick={() => handleRoute(HOME_ROUTE)}>
                    <img style={{width:26}} src={homeIcon} alt=""/>
                    <span>Home</span>
                </div>
                <div className={styles.nav_title} onClick={() => handleRoute(SEARCH_ROUTE)}>
                    <img style={{width:26}} src={searchIcon} alt=""/>
                    <span>Search</span>
                </div>
            </div>
        </div>
    );
};

