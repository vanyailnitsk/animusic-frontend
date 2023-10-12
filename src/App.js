import './App.css';
import AppRouter from "./navigation/AppRouter";
import {Provider} from "react-redux";
import store from './store/index'
import MusicStore from "./store/MusicStore";


function App() {

    return (
        <AppRouter/>
    );
}

export default App;
