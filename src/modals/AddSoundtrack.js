import React, {useEffect, useState} from 'react';
import '../style/AddSoundtrack.css'
import {getAllAnime} from "../services/api/anime";
import {createSoundtrackFromFile, createSoundtrackFromYoutube} from "../services/api/audio";

const AddSoundtrack = () => {
    const [animeData,setAnimeData] = useState([])
    const [selectedAnime, setSelectedAnime] = useState('');
    const [playlists,setPlaylists] = useState([])
    const [status,setStatus] = useState("")
    useEffect(() => {
        getAllAnime()
            .then(data => {
                setAnimeData(data.data);
            })
            .catch((error) => console.log(error))
    },[]);
    const [file, setFile] = useState(null);
    const [soundtrackData, setSoundtrackData] = useState({
        originalTitle: '',
        animeTitle: '',
        trackType:'',
        playlistId:0,
        videoUrl:'',
    });
    const playlistTypeMapping = {
        'Openings': 'OPENING',
        'Endings': 'ENDING',
        'Themes': 'THEME',
        'Scene songs': 'SCENE_SONG',
    };
    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };
    useEffect(() => {
        if (playlists) {
            setSoundtrackData({
                ...soundtrackData,
                playlistId: playlists[0] ? playlists[0].id : 0
            })
        }
    },[playlists])
    const handleAnimeChange = event => {
        const selectedAnimeTitle = event.target.value;
        setSelectedAnime(selectedAnimeTitle);
        const selectedAnimeObject = animeData.find(anime => anime.title === selectedAnimeTitle);
        if (selectedAnimeObject) {
            setPlaylists(selectedAnimeObject.playlists);
        }
    };
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setSoundtrackData({
            ...soundtrackData,
            [name]: value,
        });
    };
    const createFromFile = () => {
        if (file && soundtrackData.originalTitle && soundtrackData.animeTitle
            && soundtrackData.playlistId !== 0) {
            const selectedPlaylist = playlists.find(
                (playlist) => playlist.id.toString() === soundtrackData.playlistId.toString()
            );
            soundtrackData.trackType = selectedPlaylist ? playlistTypeMapping[selectedPlaylist.name] : ''

            const formData = new FormData();
            formData.append('file', file);

            for (const key in soundtrackData) {
                formData.append(key, soundtrackData[key]);
            }

            createSoundtrackFromFile(formData)
                .then(data => setStatus("Саундтрек успешно создан"))
                .catch(error => setStatus("Ошибка при создании саундтрека"));
        }
    }
    const createFromYouTube = () => {
        if (soundtrackData.originalTitle && soundtrackData.animeTitle &&
            soundtrackData.videoUrl && soundtrackData.playlistId != 0) {
            const selectedPlaylist = playlists.find(
                (playlist) => playlist.id.toString() === soundtrackData.playlistId.toString()
            );
            soundtrackData.trackType = selectedPlaylist ? playlistTypeMapping[selectedPlaylist.name] : ''
            createSoundtrackFromYoutube(soundtrackData)
                .then(data => setStatus("Саундтрек успешно создан"))
                .catch(error => setStatus("Ошибка при создании саундтрека"));
        }
    }
    const handleSubmit = () => {
        if (fileUploadVisible) {
            createFromFile()
        }
        else if (youtubeUploadVisible) {
            createFromYouTube()
        }
    };

    const [fileUploadVisible, setFileUploadVisible] = useState(false);
    const [youtubeUploadVisible, setYoutubeUploadVisible] = useState(false);

    const showFileUpload = () => {
        setFileUploadVisible(true);
        setYoutubeUploadVisible(false);
    };

    const showYoutubeUpload = () => {
        setFileUploadVisible(false);
        setYoutubeUploadVisible(true);
    };
    return (
        <div className="add-soundtrack-main">
            <input className="original-title" name="originalTitle"
                   value={soundtrackData.originalTitle}
                   onChange={handleInputChange}
                   type="text" placeholder=" Original title"/>
            <input className="anime-title" name="animeTitle"
                   value={soundtrackData.animeTitle}
                   onChange={handleInputChange}
                   type="text" placeholder=" Anime Track Title"/>
            <select className="anime" onChange={handleAnimeChange} value={selectedAnime}>>
                <option value="">Choose anime...</option>
                {animeData.map((anime) => (
                    <option key={anime.title} value={anime.title}>
                        {anime.title}
                    </option>
                ))}
            </select>
            <div className="playlist">
                <span>Choose playlist</span>
                <select className="select" value={soundtrackData.playlistId}
                        onChange={handleInputChange}
                        name="playlistId"
                >
                    {playlists.map(playlist => (
                        <option key={playlist.id} value={playlist.id}>
                            {playlist.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className="method-of-adding">
                <button onClick={showFileUpload} className={fileUploadVisible ? 'from-file' : 'from-youtube'}>From file</button>
                <button onClick={showYoutubeUpload} className={youtubeUploadVisible ? 'from-file' : 'from-youtube'}>From YouTube</button>
            </div>
            <div className="methods-container">
                {fileUploadVisible && (
                    <div className="file-upload">
                        <input type="file" onChange={handleFileChange}/>
                    </div>
                )}

                {youtubeUploadVisible && (
                    <div className="youtube-upload">
                        <input name="videoUrl"
                               value={soundtrackData.videoUrl}
                               onChange={handleInputChange}
                               type="text" placeholder=" YouTube Link" />
                    </div>
                )}
            </div>
            <div className="create"><button onClick={handleSubmit}>Create</button></div>
            <p>{status}</p>
        </div>
    );
};

export default AddSoundtrack;