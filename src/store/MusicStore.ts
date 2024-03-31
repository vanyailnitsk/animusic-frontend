import {makeAutoObservable} from "mobx";
import {ISoundtrack, SoundtrackData} from "../models/Soundtracks";
import {IPlaylist} from "../models/Playlists";
import AuthService from "../services/AuthService";
import MusicService from "../services/MusicService";

class MusicStore{
    private _playlist: IPlaylist;
    private _trackIndex: number;
    private _isPlaying: boolean;
    volume: number;
    constructor(){
        this._playlist = JSON.parse(localStorage.getItem("playlist") || '[]')
        this._trackIndex = JSON.parse(localStorage.getItem("currentTrackIndex") || '0')
        this._isPlaying = false
        this.volume = Number(localStorage.getItem('volume')) || 0.5
        makeAutoObservable(this)
    }

    setPlaylist(playlist : IPlaylist) {
        this._playlist = playlist
        localStorage.setItem("playlist", JSON.stringify(playlist));
    }
    changeVolume(volume : number) {
        this.volume = volume
        localStorage.setItem('volume', this.volume.toString())
    }
    addToFavorite(TrackId:number){
        MusicService.addToFavorite(TrackId)
    }
    setTrackIndex(index:number) {
        this._trackIndex = index

        localStorage.setItem("currentTrackIndex", JSON.stringify(index));
    }
    shufflePlaylist() {
        const { soundtracks } = this._playlist;
        const shuffledSoundtracks = [...soundtracks];
        for (let i = shuffledSoundtracks.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledSoundtracks[i], shuffledSoundtracks[j]] = [shuffledSoundtracks[j], shuffledSoundtracks[i]];
        }
        this._playlist.soundtracks = shuffledSoundtracks;
    }
    togglePlayPause() {
        this._isPlaying=!this._isPlaying
    }
    setIsPlaying(bool: boolean) {
        this._isPlaying=bool
    }
    nextTrack() {
        const nextIndex = this._trackIndex + 1;
        if (nextIndex < this._playlist.soundtracks.length) {
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
    trackEquals(track : SoundtrackData):boolean {
        return JSON.stringify(this.currentTrack)===JSON.stringify(track)
    }
    get currentTrack(): SoundtrackData | undefined  {
        if (this._playlist && this._playlist.soundtracks && this._playlist.soundtracks.length > this._trackIndex && this._trackIndex >= 0) {
            return this._playlist.soundtracks[this._trackIndex].soundtrack;
        } else {
            return undefined;
        }
    }
}

export default MusicStore;