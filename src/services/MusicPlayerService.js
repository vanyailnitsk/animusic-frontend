const getPlayerState = () => {
    const playerState = localStorage.getItem("playerState");
    return playerState ? JSON.parse(playerState) : { isPlaying: false, track: null };
};

const setPlayerState = (isPlaying, track) => {
    const playerState = { isPlaying, track };
    localStorage.setItem("playerState", JSON.stringify(playerState));
};

export { getPlayerState, setPlayerState };
