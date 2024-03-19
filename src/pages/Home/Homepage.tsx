import React, {useEffect, useState} from 'react';
import {getAllAnime} from "../../services/api/anime";
import "./HomePage.css"
import {useFetching, useFetchingResult} from "../../hooks/useFetching";
import CardsList from "../../components/CardList/CardsList";
import {IAnime} from "../../models/Anime";

const Homepage = () => {
    const [animeCards,setAnimeCards] = useState<IAnime[]>([])
    const {fetching :fetchAnime,isLoading,error} : useFetchingResult= useFetching(async () => {
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
            <div className='greeting' style={{}}>
                Welcome to Animusic – your cozy corner in the world of anime music! Here, every sound is like a note in a story, every melody is like a chapter in your imaginary adventure. Discover the magic of anime sounds, immerse yourself in the musical worlds of your favorite TV series and movies. Enjoy a collection of the most mesmerizing and exciting compositions created by talented composers, especially for the anime world. From epic soundtracks to exciting openings and endings, everyone will find something special here.
            </div>
            {!isLoading
                ? <CardsList animeCards={animeCards}/>
                : <div>{error}</div>
            }
        </div>
    );
};

export default Homepage;