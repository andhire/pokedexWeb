import React from "react";
import { Card, CardGroup, Spinner } from "react-bootstrap";

class Pokemon extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Spinner
                    animation="border"
                    role="status"
                    variant="danger"
                    className="spinner"
                >
                    <span className="sr-only">Loading...</span>
                </Spinner>
                {/* <Card>Charmander</Card>
                <img
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
                    width="200"
                    height="200"
                />

                <h3>Evolutions</h3>
                <CardGroup>
                    <Card>
                        <img
                            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
                            width="200"
                            height="200"
                        />
                        <Card.Title>Charmander</Card.Title>
                    </Card>
                    ->
                    <Card>
                        <img
                            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"
                            width="200"
                            height="200"
                        />
                        <Card.Title>Charmander</Card.Title>
                    </Card>
                    ->
                    <Card>
                        <img
                            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
                            width="200"
                            height="200"
                        />
                        <Card.Title>Charmander</Card.Title>
                    </Card>
                </CardGroup> */}
            </React.Fragment>
        );
    }
}

export default Pokemon;
