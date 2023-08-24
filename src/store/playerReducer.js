
const initialState = {
    //currentTrack: null,
    currentTrack: JSON.parse(localStorage.getItem("currentTrack")) || null,
    isPlaying: false,
};

const playerReducer = (state = initialState, action) => {
    switch (action.type) {
        case "PLAY_TRACK":
            return {
                ...state,
                currentTrack: action.payload,
                isPlaying: true,
            };
        case "SET_CURRENT_TRACK":
            localStorage.setItem("currentTrack", JSON.stringify(action.payload));
            return {
                ...state,
                currentTrack: action.payload,
            };
        case "PAUSE_TRACK":
            return {
                ...state,
                isPlaying: false,
            };
        default:
            return state;
    }
};

export default playerReducer;
