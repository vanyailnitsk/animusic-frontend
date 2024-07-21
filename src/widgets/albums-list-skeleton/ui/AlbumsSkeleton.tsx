import styles from './albums-list-skeleton.module.css'
import Skeleton from "react-loading-skeleton";

export const AlbumsSkeleton = () => {
    return (
        <div className={styles.album_skeleton}>
            {[...Array(4)].map((_, index) => (
                <Skeleton key={index} style={{width: 190, height: 201}}/>
            ))}
        </div>
    );
};

