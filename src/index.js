import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MusicStore from "./store/MusicStore";


const root = ReactDOM.createRoot(document.getElementById('root'));
export const Context  = createContext(null)
root.render(
    <Context.Provider value={{musicStore:new MusicStore()}}>
    <App/>
    </Context.Provider>
);

