const initialState = {
    playlist: JSON.parse(localStorage.getItem("playlist")) || [], // Инициализация пустого плейлиста
    currentTrackIndex: JSON.parse(localStorage.getItem("currentTrackIndex")) || 0, // Индекс текущего трека
    isPlaying: false,
};

const playerReducer = (state = initialState, action) => {
    switch (action.type) {
        case "PLAY_TRACK":
            localStorage.setItem("currentTrackIndex", JSON.stringify(action.payload));
            return {
                ...state,
                currentTrackIndex: action.payload, // Сохраняем индекс текущего трека
                isPlaying: true,
            };
        case "SET_CURRENT_TRACK_INDEX":
            localStorage.setItem("currentTrackIndex", JSON.stringify(action.payload));
            return {
                ...state,
                currentTrackIndex: action.payload,
            };
        case "SET_PLAYLIST":
            localStorage.setItem("playlist", JSON.stringify(action.payload)); // Сохраняем плейлист
            return {
                ...state,
                playlist: action.payload,
            };
        default:
            return state;
    }
};

export default playerReducer;
