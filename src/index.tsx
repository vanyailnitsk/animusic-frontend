import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MusicStore from "./store/MusicStore";
import {IMusicStore} from "./interfaces/IMusicStore";


const root = ReactDOM.createRoot(document.getElementById('root'));
export const Context = createContext<IMusicStore>(new MusicStore());
root.render(
    <App/>
);

