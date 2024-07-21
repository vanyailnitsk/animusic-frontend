import {useState} from 'react';
import styles from './app-content.module.css'
import {Navigation} from "@/widgets/navigation";
import {MediaLibrary} from "@/widgets/media-library";
import {MainContent} from "@/widgets/main-content";


export const AppContent = ({page}) => {
    const [menuActive,setMenuActive] = useState(false)
    const closeMenu = (e) => {
        if (menuActive && e.target === e.currentTarget){
            setMenuActive(false)
        }
    }
    return (
        <div className={styles.main__wrapper} onClick={closeMenu}>
            <Navigation menuActive={menuActive} setMenuActive={setMenuActive} />
            <MediaLibrary menuActive={menuActive} setMenuActive={setMenuActive}/>
            <MainContent page={page} setMenuActive={setMenuActive} menuActive={menuActive}/>
        </div>
    );
};

