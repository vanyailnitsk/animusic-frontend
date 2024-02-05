import {makeAutoObservable} from "mobx";

class MusicStore {
    constructor() {
        this._playlist = JSON.parse(localStorage.getItem("playlist")) || []
        this._trackIndex = JSON.parse(localStorage.getItem("currentTrackIndex")) || 0
        this._isPlaying = false
        makeAutoObservable(this)
    }

    setPlaylist(playlist) {
        this._playlist = playlist
        localStorage.setItem("playlist", JSON.stringify(playlist));
    }

    setTrackIndex(index) {
        this._trackIndex = index

        localStorage.setItem("currentTrackIndex", JSON.stringify(index));
    }

    togglePlayPause() {
        this._isPlaying=!this._isPlaying
    }
    setIsPlaying(bool) {
        this._isPlaying=bool
    }
    nextTrack() {
        const nextIndex = this._trackIndex + 1;
        if (nextIndex < this._playlist.length) {
            this._trackIndex++;
        } else {
            this._trackIndex=0
        }
    }
    previousTrack() {
        const previousIndex = this._trackIndex - 1;
        if (previousIndex > 0) {
            this._trackIndex = previousIndex
        } else {
            this._trackIndex=0
        }
    }
    get playlist() {
        return this._playlist
    }

    get trackIndex() {
        return this._trackIndex
    }
    get isPlaying() {
        return this._isPlaying
    }
    trackEquals(track) {
        return JSON.stringify(this.currentTrack)===JSON.stringify(track)
    }
    get currentTrack() {
        return this._playlist[this._trackIndex]
    }
    get repeat() {
        return this._isRepeat;
    }
}

export default MusicStore;