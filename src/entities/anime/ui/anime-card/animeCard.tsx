import {useState} from 'react';
import styles from './anime-card.module.css'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import {useNavigate} from "react-router-dom";
import {IAnime} from "@/entities/anime";
import {storageUrl} from "@/shared/api";

interface AnimeCardProps {
    card: IAnime;
}

export const AnimeCard = ({card}: AnimeCardProps) => {
    const navigate = useNavigate();
    const [loading,setLoading] = useState<boolean>(true)
    const imageUrl = storageUrl+card.cardImage.source
    return (
        <div className={styles.anime__card} onClick={() => navigate('/anime/' + card.id)}>
            {loading?
                (
                    <div style={{position:"absolute"}}>
                        <Skeleton style={{width:290,height:160,position:'absolute',left:14,right:14,top:14}}/>
                    </div>
                )
                : null
            }
            <img  src={imageUrl} alt="" onLoad={() => setLoading(false)}/>
            <span>{card.title}</span>
        </div>
    );
};

