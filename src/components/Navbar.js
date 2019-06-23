import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import "./styles/card.css";
function Navbara(props) {
    return (
        <React.Fragment>
            <Navbar bg="danger" expand="lg" variant="dark">
                <LinkContainer to="/">
                    <Navbar.Brand>
                        <img
                            src="http://rs795.pbsrc.com/albums/yy232/PixKaruumi/Pixels/Pixels%2081/1Pikachu_Moving_Sprite.gif~c200"
                            height="40"
                            width="40"
                            style={{ paddingBottom: 10 + "px" }}
                            alt="Pikachu gif"
                        />
                        Pokedex
                    </Navbar.Brand>
                </LinkContainer>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto" />
                    <Nav>
                        <LinkContainer to="/Kanto/">
                            <Nav.Link>1st Gen. (Kanto)</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/johto/">
                            <Nav.Link>2nd Gen. (Johto)</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/hoenn/">
                            <Nav.Link>3rd Gen. (Hoenn)</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/sinnoh/">
                            <Nav.Link>4th Gen. (Sinnoh)</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/teselia/">
                            <Nav.Link>5th Gen. (Teselia)</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/kalos/">
                            <Nav.Link>6th Gen. (Kalos)</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/alola/">
                            <Nav.Link>7th Gen. (Alola)</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </React.Fragment>
    );
}

export default Navbara;
