import React from "react";
import { Navbar, Nav, Button, Form, FormControl } from "react-bootstrap";
function Navbara(props) {
    return (
        <React.Fragment>
            <Navbar bg="danger" variant="dark">
                <Navbar.Brand href="#home">
                    <img
                        src="http://rs795.pbsrc.com/albums/yy232/PixKaruumi/Pixels/Pixels%2081/1Pikachu_Moving_Sprite.gif~c200"
                        height="40"
                        width="40"
                        style={{ paddingBottom: 10 + "px" }}
                    />
                    Pokedex
                </Navbar.Brand>
                <Nav className="mr-auto" />
                <Form inline>
                    <FormControl
                        type="text"
                        placeholder="Search"
                        className="mr-lg-2"
                    />
                    <Button variant="outline-light">Search</Button>
                </Form>
            </Navbar>
        </React.Fragment>
    );
}

export default Navbara;
