import React from 'react';
import PlaylistCardSkeleton from "../../PlaylistCard/Skeleton/PlaylistCardSkeleton";
import styles from './style.module.css'
const PlaylistsSkeleton = () => {
    return (
        <div className={styles.playlists__skeleton}>
            {[...Array(4)].map((_, index) => (
                <PlaylistCardSkeleton key={index} />
            ))}
        </div>
    );
};

export default PlaylistsSkeleton;