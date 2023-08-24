export const playTrack = (track) => {
    return {
        type: "PLAY_TRACK",
        payload: track,
    };
};

export const setCurrentTrack = (track) => {
    return {
        type: "SET_CURRENT_TRACK",
        payload: track,
    };
};
