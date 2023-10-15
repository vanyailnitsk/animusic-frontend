import React, {useState} from 'react';
import {Button, Container, Form} from 'react-bootstrap';
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
        <Container className="container">
            <Form >
                <Form.Group controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        name="title"
                        value={animeData.title}
                        onChange={handleInputChange}
                        placeholder="Title"
                    />
                </Form.Group>

                <Form.Group controlId="studio">
                    <Form.Label>Studio</Form.Label>
                    <Form.Control
                        type="text"
                        name="studio"
                        value={animeData.studio}
                        onChange={handleInputChange}
                        placeholder="Studio"
                    />
                </Form.Group>

                <Form.Group controlId="releaseYear">
                    <Form.Label>Release Year</Form.Label>
                    <Form.Control
                        type="text"
                        name="releaseYear"
                        value={animeData.releaseYear}
                        onChange={handleInputChange}
                        placeholder="Release Year"
                    />
                </Form.Group>

                <Form.Group controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={4}
                        name="description"
                        value={animeData.description}
                        onChange={handleInputChange}
                        placeholder="Description"
                    />
                </Form.Group>

                <Form.Group controlId="folderName">
                    <Form.Label>Folder Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="folderName"
                        value={animeData.folderName}
                        onChange={handleInputChange}
                        placeholder="Folder Name"
                    />
                </Form.Group>

                <Button variant="primary" onClick={handleSubmit}>
                    Create
                </Button>
            </Form>
            <p>{status}</p>
        </Container>
    );
};

export default CreateAnime;
