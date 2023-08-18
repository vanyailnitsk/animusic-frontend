import './App.css';
import AppRouter from "./navigation/AppRouter";
import MusicPlayer from "./components/MusicPlayer";
import {Provider} from "react-redux";
import store from './store/index'
import NavBar from "./navigation/NavBar";
import {useEffect, useState} from "react";
import {getAnimeNavs} from "./services/api/anime";
function App() {
    const [animeNavs,setAnimeNavs] = useState([])
    useEffect(() => {
        getAnimeNavs().then(data => setAnimeNavs(data.data))
    },[])
    return (
        <Provider store={store}>
            <NavBar animeNavs={animeNavs}/>
            <MusicPlayer/>
            <AppRouter/>
        </Provider>
    );
}

export default App;
