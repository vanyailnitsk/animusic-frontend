import {makeAutoObservable} from "mobx";
import {IMusicStore} from "../interfaces/IMusicStore";
import {ISoundtrack} from "../interfaces/Soundtracks";

class MusicStore implements IMusicStore{
    private _playlist: ISoundtrack[];
    private _trackIndex: number;
    private _isPlaying: boolean;
    constructor(){
        this._playlist = JSON.parse(localStorage.getItem("playlist")) || []
        this._trackIndex = JSON.parse(localStorage.getItem("currentTrackIndex")) || 0
        this._isPlaying = false
        makeAutoObservable(this)
    }

    setPlaylist(playlist : ISoundtrack[]) {
        this._playlist = playlist
        localStorage.setItem("playlist", JSON.stringify(playlist));
    }

    setTrackIndex(index:number) {
        this._trackIndex = index

        localStorage.setItem("currentTrackIndex", JSON.stringify(index));
    }

    togglePlayPause() {
        this._isPlaying=!this._isPlaying
    }
    setIsPlaying(bool: boolean) {
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

    get trackIndex():number {
        return this._trackIndex
    }
    get isPlaying():boolean {
        return this._isPlaying
    }
    trackEquals(track : ISoundtrack):boolean {
        return JSON.stringify(this.currentTrack)===JSON.stringify(track)
    }
    get currentTrack() :ISoundtrack{
        return this._playlist[this._trackIndex]
    }
}

export default MusicStore;