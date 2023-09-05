import './App.css';
import AppRouter from "./navigation/AppRouter";
import {Provider} from "react-redux";
import store from './store/index'
function App() {

    return (
        <Provider store={store}>
            <AppRouter/>
        </Provider>
    );
}

export default App;
