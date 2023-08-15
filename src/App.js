import './App.css';
import UploadSoundtrack from "./modals/UploadSoundtrack";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import Homepage from "./pages/Homepage";
import AnimePage from "./pages/AnimePage";
import AppRouter from "./AppRouter";
import {PlayerProvider} from "./context/PlayerContext";
import MusicPlayer from "./components/MusicPlayer";
import {Provider} from "react-redux";
import store from './store/index'
function App() {


    return (
        <Provider store={store}>
            <MusicPlayer/>
            <AppRouter/>
        </Provider>
    );
}

export default App;
