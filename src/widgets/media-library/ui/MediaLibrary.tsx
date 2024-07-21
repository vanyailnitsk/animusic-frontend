import './MediaLibrary.css'
import {FavoriteTracks} from "@/shared/ui";
interface MediaLibraryProps{
    menuActive:boolean
}

export const MediaLibrary = ({menuActive}: MediaLibraryProps) => {

    return (
        <div className={menuActive? 'media__library__wrapper menu__active' : 'media__library__wrapper'}>
            <FavoriteTracks/>
        </div>
    );
};

