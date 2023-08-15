// store/index.js
import { createStore, combineReducers } from "redux";
import playerReducer from "./playerReducer";

const rootReducer = combineReducers({
    player: playerReducer,
});

const store = createStore(rootReducer);

export default store;
