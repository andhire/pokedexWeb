import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./styles/card.css";
function Navbara(props) {
    return (
        <React.Fragment>
            <Navbar bg="danger" variant="dark">
                <NavLink to="/" className="not-active-Pokedex">
                    <img
                        src="http://rs795.pbsrc.com/albums/yy232/PixKaruumi/Pixels/Pixels%2081/1Pikachu_Moving_Sprite.gif~c200"
                        height="40"
                        width="40"
                        style={{ paddingBottom: 10 + "px" }}
                        alt="Pikachu gif"
                    />
                    Pokedex
                </NavLink>

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto" />
                    <Nav>
                        <NavLink to="/Kanto/" className="not-active">
                            1st Gen. (Kanto)
                        </NavLink>
                        <NavLink to="/johto/" className="not-active">
                            2nd Gen. (Johto)
                        </NavLink>
                        <NavLink to="/hoenn/" className="not-active">
                            3rd Gen. (Hoenn)
                        </NavLink>
                        <NavLink to="/sinnoh/" className="not-active">
                            4th Gen. (Sinnoh)
                        </NavLink>
                        <NavLink to="/teselia/" className="not-active">
                            5th Gen. (Teselia)
                        </NavLink>
                        <NavLink to="/kalos/" className="not-active">
                            6th Gen. (Kalos)
                        </NavLink>
                        <NavLink to="/alola/" className="not-active">
                            7th Gen. (Alola)
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </React.Fragment>
    );
}

export default Navbara;
