import React from 'react';
import fav from '../../icons/favourites.jpg'
import styles from './FavoriteTracks.module.css'

const FavoriteTracks = () => {
    return (
        <div className={styles.favorite__tracks__wrapper}>
            <div className={styles.favorite__tracks__content}>
                <img src={fav} alt="" />
                <div className={styles.favorite__tracks__name}>
                    Favorite tracks
                </div>
            </div>
        </div>
    );
};

export default FavoriteTracks;