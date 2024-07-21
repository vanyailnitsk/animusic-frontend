import {useEffect, useState} from 'react';
import "./home-page.css"
import {getAllAnime, IAnime} from "@/entities/anime";
import {useFetching} from "@/shared/lib/fetching";
import {AnimeCardsList} from "@/widgets/anime-card-list";
import {AnimeCardListSkeleton} from "@/widgets/anime-card-list-skeleton";

export const HomePage = () => {
    const [animeCards, setAnimeCards] = useState<IAnime[]>([])
    const {fetching: fetchAnime, isLoading, error} = useFetching(async () => {
        const response = await getAllAnime()
        setAnimeCards(response.data)
    })
    useEffect(() => {
        fetchAnime()
    }, []);
    return (
        <div className="home__page__wrapper">
            <div className='logo'>
                <span>Animusic</span>
            </div>
            {!error ?
                (!isLoading ?
                        <AnimeCardsList animeCards={animeCards}/>
                        : <AnimeCardListSkeleton/>
                )
                : <div>{error}</div>
            }
        </div>
    );
};

