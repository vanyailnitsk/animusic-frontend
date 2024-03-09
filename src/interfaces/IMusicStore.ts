import {ISoundtrack} from "./Soundtracks";

export interface IMusicStore {
    setPlaylist(playlist: ISoundtrack[]): void;
    setTrackIndex(index: number): void;
    togglePlayPause(): void;
    setIsPlaying(bool: boolean): void;
    nextTrack(): void;
    previousTrack(): void;
    trackEquals(track: ISoundtrack): boolean;
    get isPlaying() : boolean
    get currentTrack() :ISoundtrack
    get trackIndex():number
    get playlist() : ISoundtrack[]
}