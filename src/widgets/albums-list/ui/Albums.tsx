import styles from './albums-list.module.css'
import {AlbumCard, getAlbumsByAnimeId} from "@/entities/album";
import {storageUrl} from "@/shared/api";
import Skeleton from "react-loading-skeleton";
import {useFetching} from "@/shared/lib";

interface AlbumListProps {
    id: string;
}

export const AlbumList = ({id}: AlbumListProps) => {
    const {data, error, isLoading} = useFetching(async () => await getAlbumsByAnimeId(id), [id])
    if (error) {
        return <div>{error}</div>
    }
    if (isLoading) {
        return (
            <div className={styles.albums}>
                {[...Array(4)].map((_, index) => (
                    <div className={styles.album__card__skeleton}>
                        <Skeleton key={index} className={styles.album__card__skeleton__img}/>
                        <Skeleton key={index} className={styles.album__card__skeleton__title}/>
                    </div>
                ))}
            </div>
        )
    }
    return (
        <div className={styles.albums}>
            {data && data.map(album => <AlbumCard name={album.name} id={album.id} key={album.id}
                                                  imageUrl={storageUrl + album.coverArt?.image.source}/>)}
        </div>
    );
};

