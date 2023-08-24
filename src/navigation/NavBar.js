// NavBar.js
import React, {useEffect, useState} from 'react';
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';
import {CREATE_ANIME, CREATE_SOUNDTRACK_FROM_FILE, CREATE_SOUNDTRACK_FROM_YOUTUBE, HOME_ROUTE} from "./routes";
import MusicPlayer from "../components/MusicPlayer";
import '../style/NavBar.css'
import {useNavigate} from "react-router-dom";
import {getAnimeNavs} from "../services/api/anime";

const NavBar = () => {
    const navigate = useNavigate();
    const [animeNavs, setAnimeNavs] = useState([])
    useEffect(() => {
        getAnimeNavs().then(data => setAnimeNavs(data.data))
    }, [])
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container className="border-0 p-0">
                <Navbar.Brand href="/">Animusic</Navbar.Brand>
                <MusicPlayer className="m-5"/>
                <Nav className="me-auto ms-3">
                    <Nav.Link onClick={() => navigate(HOME_ROUTE)}>Home</Nav.Link>
                    <Nav.Link
                        onClick={() => navigate(CREATE_ANIME)}
                    >Create Anime
                    </Nav.Link>
                    <NavDropdown title="Create soundtrack" id="basic-nav-dropdown">
                        <NavDropdown.Item
                            // href={CREATE_SOUNDTRACK_FROM_FILE}>from file
                            onClick={() => navigate(CREATE_SOUNDTRACK_FROM_FILE)}
                        >from file
                        </NavDropdown.Item>
                        <NavDropdown.Item
                            // href={CREATE_SOUNDTRACK_FROM_YOUTUBE}>from YouTube
                            onClick={() => navigate(CREATE_SOUNDTRACK_FROM_YOUTUBE)}
                        >from YouTube
                        </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Anime" id="basic-nav-dropdown">
                        {animeNavs && animeNavs.map(anime => (
                            <NavDropdown.Item
                                key={anime.id}
                                onClick={() => navigate(`/anime/${anime.id}`)}
                            >{anime.title}
                            </NavDropdown.Item>
                        ))}
                    </NavDropdown>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavBar;
