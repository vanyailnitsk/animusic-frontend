// store/index.js
import { createStore, combineReducers } from "redux";
import playerReducer from "./playerReducer";
import 'bootstrap/dist/css/bootstrap.css';
const rootReducer = combineReducers({
    player: playerReducer,
});

const store = createStore(rootReducer);

export default store;
