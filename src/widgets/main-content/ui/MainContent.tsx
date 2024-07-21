import './MainContent.css'
import menu from '@/shared/icons/menu.png'
import {PageWrapper} from "@/shared/ui";

export const MainContent = ({page, setMenuActive, menuActive}) => {
    return (
        <div className={ menuActive? 'main__content__wrapper background__blur' : 'main__content__wrapper'}>
            <img src={menu} alt="" className={menuActive? 'hidden' : 'menu'} onClick={()=> setMenuActive(!menuActive)}/>
            <PageWrapper page={page}/>
        </div>
    );
};

