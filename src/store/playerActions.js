export const playTrack = (trackIndex) => {
    return {
        type: "PLAY_TRACK",
        payload: trackIndex,
    };
};

export const setCurrentPlaylist = (playlist) => {
    return {
        type: "SET_PLAYLIST",
        payload: playlist,
    };
};

export const setCurrentTrackIndex = (index) => {
    return {
        type: "SET_CURRENT_TRACK_INDEX",
        payload: index,
    };
};

