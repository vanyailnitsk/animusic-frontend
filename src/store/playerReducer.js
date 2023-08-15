// store/playerReducer.js
const initialState = {
    currentTrack: null,
    currentTrackId: localStorage.getItem("currentTrackId") || null,
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
        case "SET_CURRENT_TRACK_ID":
            localStorage.setItem("currentTrackId", action.payload);
            return {
                ...state,
                currentTrackId: action.payload,
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
