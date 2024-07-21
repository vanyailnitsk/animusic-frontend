import styles from './style.module.css'
import Skeleton from "react-loading-skeleton";

export const AnimeCardListSkeleton = () => {
    return (
        <div className={styles.skeleton__cardslist__wrapper}>
            {[...Array(12)].map((_, index) => (
                <Skeleton key={index} className={styles.skeleton__card}/>
            ))}
        </div>
    );
};

