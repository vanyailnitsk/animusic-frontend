import {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import styles from './anime-page.module.css'
import {AnimeBanner, getAnimeInfo, IAnime} from "@/entities/anime";
import {storageUrl} from "@/shared/api";
import {AlbumList} from "@/widgets/albums-list";

export const AnimePage = () => {
    const {id} = useParams()
    const [animeData, setAnimeData] = useState<IAnime | null>(null)
    const [color, setColor] = useState('')
    useEffect(() => {
        id && getAnimeInfo(id)
            .then(response => {
                setAnimeData(response.data);
                setColor(response.data.banner.color)
            })
            .catch((error) => console.log(error))
    }, [id]);

    return (
        <div className={styles.anime__page__wrapper}>
            {animeData && <AnimeBanner imageUrl={storageUrl + animeData.banner.image.source} title={animeData.title}/>}
            <div style={{background: `linear-gradient(to bottom, ${color}, #121212`}}
                 className={styles.anime__page__bottom__rgb}></div>
            {id && <AlbumList id={id}/>}
        </div>
    );
};

