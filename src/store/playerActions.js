// store/playerActions.js
export const playTrack = (track) => {
    return {
        type: "PLAY_TRACK",
        payload: track,
    };
};

export const setCurrentTrackId = (trackId) => {
    return {
        type: "SET_CURRENT_TRACK_ID",
        payload: trackId,
    };
};
