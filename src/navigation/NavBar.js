// NavBar.js
import React from 'react';
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';
import {CREATE_ANIME, CREATE_SOUNDTRACK_FROM_FILE, CREATE_SOUNDTRACK_FROM_YOUTUBE, HOME_ROUTE} from "./routes";

const NavBar = ({animeNavs}) => {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container className="border-0">
                <Navbar.Brand href="#home">Animusic</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href={HOME_ROUTE}>Home</Nav.Link>
                    <Nav.Link href={CREATE_ANIME}>Create Anime</Nav.Link>
                    <NavDropdown title="Create soundtrack" id="basic-nav-dropdown">
                        <NavDropdown.Item href={CREATE_SOUNDTRACK_FROM_FILE}>from file</NavDropdown.Item>
                        <NavDropdown.Item href={CREATE_SOUNDTRACK_FROM_YOUTUBE}>from YouTube</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Anime" id="basic-nav-dropdown">
                        {animeNavs.map(anime => (
                            <NavDropdown.Item key={anime.id} href={`/anime/${anime.id}`}>
                                {anime.title}
                            </NavDropdown.Item>
                        ))}
                    </NavDropdown>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavBar;
