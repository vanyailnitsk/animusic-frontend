import {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from "@/app/App";
import {MusicStore} from "@/shared/store/music";
import {UserStore} from "@/shared/store/user";

interface State{
    userStore: UserStore,
    musicStore : MusicStore
}
const userStore = new UserStore()
const musicStore = new MusicStore()
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
export const Context = createContext<State>({
    userStore,
    musicStore
});
root.render(
    <Context.Provider value={ {userStore, musicStore} }>
        <App/>
    </Context.Provider>
);

