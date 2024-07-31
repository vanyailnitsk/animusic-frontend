import Skeleton from "react-loading-skeleton";
import styles from './banner.module.css'
import {useState} from "react";

interface AnimeBannerProps {
    imageUrl: string;
    title: string
}

export const AnimeBanner = ({imageUrl, title}: AnimeBannerProps) => {
    const [isLoadingImage, setIsLoadingImage] = useState(true)
    if (isLoadingImage) {
        return (
            <div>
                <Skeleton style={{
                    height: '35vh',
                    borderTopRightRadius: 7,
                    borderTopLeftRadius: 7,
                    position: "relative",
                    marginTop: 0
                }}/>
                <img
                    src={imageUrl} alt=""
                    onLoad={() => setIsLoadingImage(false)}
                    style={{display: "none"}}
                />
            </div>
        )
    }
    return (
        <div className={styles.anime__banner}>
            <div className={styles.overlay}></div>
            <img
                src={imageUrl} alt=""
            />
            {!isLoadingImage && title &&
                <div className={styles.anime__title}>
                    <h1>{title}</h1>
                </div>

            }
        </div>
    );
};

