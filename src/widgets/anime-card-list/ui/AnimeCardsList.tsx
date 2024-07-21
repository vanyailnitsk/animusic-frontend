import styles from './anime-cards-list.module.css'
import {AnimeCard, IAnime} from "@/entities/anime";

interface AnimeCardListProps {
    animeCards: IAnime[]
}

export const AnimeCardsList = ({animeCards}: AnimeCardListProps) => {
    return (
        <div className={styles.cards__list__wrapper}>
            {animeCards.map(card =>
                <AnimeCard card={card} key={card.id}/>
            )}
        </div>
    );
};

