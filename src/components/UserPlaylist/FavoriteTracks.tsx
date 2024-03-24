import React from 'react';
import fav from '../../icons/favourites.jpg'
import styles from './FavoriteTracks.module.css'
import {useNavigate} from "react-router-dom";
import {FAVORITES} from "../../navigation/routes";

const FavoriteTracks = () => {
    const navigate = useNavigate()
    return (
        <div className={styles.favorite__tracks__wrapper} onClick={() => navigate(FAVORITES)}>
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