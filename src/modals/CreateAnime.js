import React, {useState} from 'react';
import '../style/CreateAnime.css';
import {createAnime} from "../services/api/anime";

const CreateAnime = () => {
    const [animeData, setAnimeData] = useState({
        title: '',
        studio: '',
        releaseYear: '',
        description: '',
        folderName: '',
    });
    const [status, setStatus] = useState('');

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setAnimeData({
            ...animeData,
            [name]: value,
        });
    };

    const handleSubmit = () => {
        createAnime(animeData)
            .then(data => setStatus("Аниме успешно создано"))
            .catch(error => setStatus("Ошибка при создании аниме"));
    };

    return (
            <div className="add-anime-main">
                <input
                    className="anime-title"
                    type="text"
                    name="title"
                    value={animeData.title}
                    onChange={handleInputChange}
                    placeholder="  Title"
                />
                <input
                    className="studio"
                    type="text"
                    name="studio"
                    value={animeData.studio}
                    onChange={handleInputChange}
                    placeholder="  Studio"
                />
                <input
                    className="release-year"
                    type="text"
                    name="releaseYear"
                    value={animeData.releaseYear}
                    onChange={handleInputChange}
                    placeholder="  Release Year"
                />
                <input
                    className="description"
                    name="description"
                    value={animeData.description}
                    onChange={handleInputChange}
                    placeholder="  Description"
                />
                <input
                    className="folder-name"
                    type="text"
                    name="folderName"
                    value={animeData.folderName}
                    onChange={handleInputChange}
                    placeholder="  Folder Name"
                />

                <div className="upload-pictures">
                    <div className="anime-card">
                        <span>Anime card</span>
                        <input type="file" />
                    </div>
                    <div className="picture">
                        <span>Anime picture</span>
                        <input type="file" />
                    </div>
                </div>
                <div className="create-btn">
                    <button onClick={handleSubmit}>Create</button>
                </div>
                <p>{status}</p>
            </div>
    );
};

export default CreateAnime;
