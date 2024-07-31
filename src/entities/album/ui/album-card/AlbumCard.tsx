import {useState} from 'react';
import styles from './album-card.module.css'
import playButton from '@/shared/icons/playButton.png'
import Skeleton from "react-loading-skeleton";
import {useNavigate} from "react-router-dom";

interface AlbumCardProps {
    name: string
    id: number
    imageUrl: string
}

export const AlbumCard = ({name, id, imageUrl}: AlbumCardProps) => {
    const navigate = useNavigate()
    const [loadingImg,setLoadingImg] = useState(true)
    return (
        <div className={styles.album__card__wrapper} onClick={() => navigate('/album/' + id)}>
            {loadingImg?
                <Skeleton style={{width: 152, height: 152, position: 'absolute', top: 0, zIndex: 1000}}/>
                :null
            }
            <div className={styles.album__card__image_wrapper}>
                <img src={imageUrl} alt="" onLoad={() => setLoadingImg(false)}
                     className={styles.album__card__image}/>
                <div className={styles.album__card__actions}>
                    <img src={playButton} alt="" className={styles.album__card__actions_img}/>
                </div>
            </div>
            <span>{name}</span>
        </div>
    );
};

