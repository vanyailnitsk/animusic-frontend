import React, {useEffect, useState} from 'react';
import {Button, Container, Form} from "react-bootstrap";
import '../style/UploadSoundtrack.css'
import {createSoundtrackFromYoutube} from "../services/api/audio";
import {getAnimeNavs} from "../services/api/anime";
import '../style/CreateSoundtrack.css'
const CreateSoundtrack = () => {
    const [soundtrackData, setSoundtrackData] = useState({
        originalTitle: '',
        animeTitle: '',
        trackType: 'OPENING',
        videoUrl:'',
        anime:''
    });
    const [animeTitles,setAnimeTitles] = useState([])
    const [status,setStatus] = useState("")

    useEffect(() => {
        getAnimeNavs().then(data => setAnimeTitles(data.data))
    },[])


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setSoundtrackData({
            ...soundtrackData,
            [name]: value
        });
    };

    const handleSubmit = () => {
        createSoundtrackFromYoutube(soundtrackData)
            .then(data => setStatus("Саундтрек успешно создан"))
            .catch(error => setStatus("Ошибка при создании саундтрека"));
    };


    return (
        <div className="create-soundtrack-container">
            <div>
                <form controlId="originalTitle">
                    <Form.Label>Original Title</Form.Label>
                    <Form.Control
                        type="text"
                        name="originalTitle"
                        value={soundtrackData.originalTitle}
                        onChange={handleInputChange}
                        placeholder="Original Title"
                    />
                </form>

                <Form.Group controlId="animeTitle">
                    <Form.Label>Anime Track Title</Form.Label>
                    <Form.Control
                        type="text"
                        name="animeTitle"
                        value={soundtrackData.animeTitle}
                        onChange={handleInputChange}
                        placeholder="Anime Title"
                    />
                </Form.Group>

                <Form.Group controlId="trackType">
                    <Form.Label>Track Type</Form.Label>
                    <Form.Control
                        as="select"
                        name="trackType"
                        value={soundtrackData.trackType}
                        onChange={handleInputChange}
                    >
                        <option value="OPENING">Opening</option>
                        <option value="ENDING">Ending</option>
                        <option value="THEME">Theme</option>
                        <option value="SCENE_SONG">Scene Song</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="anime">
                    <Form.Label>Anime</Form.Label>
                    <Form.Select
                        name="anime"
                        value={soundtrackData.anime}
                        onChange={handleInputChange}>
                        <option value="">Select an anime title</option>
                        {animeTitles.map((title) => (
                            <option key={title.title} value={title.title}>
                                {title.title}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>

                <Form.Group controlId="videoUrl">
                    <Form.Label>Youtube URL</Form.Label>
                    <Form.Control
                        type="text"
                        name="videoUrl"
                        value={soundtrackData.videoUrl}
                        onChange={handleInputChange}
                        placeholder="URL"
                    />
                </Form.Group>

                <button variant="primary" onClick={handleSubmit} className="mt-2">Create</button>
            </div>
            <p>{status}</p>
        </div>
    );
};

export default CreateSoundtrack;
