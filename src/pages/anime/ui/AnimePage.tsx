import {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import styles from './anime-page.module.css'
import {getAnimeInfo, IAnime} from "@/entities/anime";
import {storageUrl} from "@/shared/api";
import {AlbumList} from "@/widgets/albums-list";
import Skeleton from "react-loading-skeleton";

export const AnimePage = () => {
    const {id} = useParams()
    const [isLoadingImage, setIsLoadingImage] = useState(true)
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
            {animeData && <div className={styles.anime__banner}>
                <div className={styles.overlay}></div>
                {isLoadingImage && <Skeleton style={{
                    height: '35vh',
                    borderTopRightRadius: 7,
                    borderTopLeftRadius: 7,
                    position: "absolute",
                    top: 0
                }}/>}
                <img
                    src={storageUrl + animeData.banner.image.source} alt=""
                    onLoad={() => setIsLoadingImage(false)}
                />
                {!isLoadingImage &&
                    <div className={styles.anime__title}>
                        <h1>{animeData.title}</h1>
                    </div>

                }
            </div>}
            <div style={{background: `linear-gradient(to bottom, ${color}, #121212`}}
                 className={styles.anime__page__bottom__rgb}></div>
            {id && <AlbumList id={id}/>}
        </div>
    );
};

