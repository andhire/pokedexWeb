import React from "react";
import { Card, CardGroup, Badge, Row, Col } from "react-bootstrap";
import "./styles/card.css";
class PokemonDetail extends React.Component {
    capitalize(name) {
        return name.charAt(0).toUpperCase() + name.slice(1);
    }

    render() {
        return (
            <React.Fragment>
                <div className="margin">
                    <Row>
                        <Col className="center">
                            <img
                                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
                                width="200"
                                height="200"
                            />
                            <h2>Charmander</h2>
                            <p>Charmander el pokemon flama</p>
                        </Col>
                    </Row>
                </div>
                <Row className="margin">
                    <Col>
                        <p>
                            <b>Height: </b>4m
                        </p>
                    </Col>

                    <Col>
                        <p>
                            <b>Weight:</b> 65kg
                        </p>
                    </Col>

                    <Col>
                        <p>
                            <b>Type:</b>
                            <Badge pill variant="danger">
                                Fire
                            </Badge>
                        </p>
                    </Col>

                    <Col>
                        <p>
                            <b>Habitat:</b> Mountains
                        </p>
                    </Col>
                </Row>
                <br />
                <div className="margin">
                    <Row>
                        <Col>
                            <h3 className="center"> Stats</h3>
                        </Col>
                    </Row>
                    <Row className="margin">
                        <p>Base Experience: 100</p>
                    </Row>
                    <Row className="margin">
                        <p>Hp: 100ps</p>
                    </Row>
                    <Row className="margin">
                        <p>Attack: 50</p>
                    </Row>
                    <Row className="margin">
                        <p>Speed: 14</p>
                    </Row>
                    <Row className="margin">
                        <p>Defense: 100</p>
                    </Row>
                    <Row className="margin">
                        <p>Special Attack: 15</p>
                    </Row>
                    <Row className="margin">
                        <p>Special Defense: 50</p>
                    </Row>
                </div>

                <Row>
                    <Col>
                        <h3 className="center"> VideoGames</h3>
                    </Col>
                </Row>
                <p>Black</p>
                <p>Fire</p>

                <Row>
                    <Col>
                        <h3 className="center"> Evolutions</h3>
                    </Col>
                </Row>

                <Row>
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
                </Row>
            </React.Fragment>
        );
    }
}

export default PokemonDetail;
