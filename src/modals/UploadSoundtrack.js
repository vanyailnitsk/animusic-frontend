import React, { useState } from 'react';
import {createSoundtrackFromFile} from "../services/api/audio";
import {Button, Container, Form} from "react-bootstrap";
import '../style/UploadSoundtrack.css'
const UploadSoundtrack = () => {
    const [file, setFile] = useState(null);
    const [soundtrackData, setSoundtrackData] = useState({
        originalTitle: '',
        animeTitle: '',
        trackType: 'OPENING',
        anime:''
    });
    const [status,setStatus] = useState("")

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setSoundtrackData({
            ...soundtrackData,
            [name]: value
        });
    };

    const handleSubmit = () => {
        const formData = new FormData();
        formData.append('file', file);

        for (const key in soundtrackData) {
            formData.append(key, soundtrackData[key]);
        }
        console.log(soundtrackData.trackType)
        createSoundtrackFromFile(formData)
            .then(data => setStatus("Саундтрек успешно создан"))
            .catch(error => setStatus("Ошибка при создании саундтрека"));
    };


    return (
        <Container >
            <Form>
                <Form.Group controlId="originalTitle">
                    <Form.Label>Original Title</Form.Label>
                    <Form.Control
                        type="text"
                        name="originalTitle"
                        value={soundtrackData.originalTitle}
                        onChange={handleInputChange}
                        placeholder="Original Title"
                    />
                </Form.Group>

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
                    <Form.Control
                        type="text"
                        name="anime"
                        value={soundtrackData.anime}
                        onChange={handleInputChange}
                        placeholder="Anime"
                    />
                </Form.Group>

                <Form.Group controlId="file">
                    <Form.Label>File</Form.Label>
                    <Form.Control
                        type="file"
                        onChange={handleFileChange}
                    />
                </Form.Group>

                <Button variant="primary" onClick={handleSubmit}>Upload</Button>
            </Form>
            <p>{status}</p>
        </Container>
    );
};

export default UploadSoundtrack;
