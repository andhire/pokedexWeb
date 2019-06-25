import React from "react";
import { Card, Badge, Row, Col, CardColumns, CardGroup } from "react-bootstrap";
import "./styles/card.css";
class PokemonDetail extends React.Component {
    capitalize(name) {
        return name.charAt(0).toUpperCase() + name.slice(1);
    }

    height(h) {
        var altura = h.toString();
        altura =
            altura.slice(0, altura.length - 1) +
            "." +
            altura[altura.length - 1];

        return altura;
    }

    render() {
        const pokemon = this.props.pokemon;
        const specie = this.props.specie;
        const evolutions = this.props.evolutions;
        var habitat = "";
        try {
            habitat = specie.habitat.name;
        } catch (e) {
            habitat = "Unknown";
        }
        return (
            <React.Fragment>
                <div className="margin">
                    <Row>
                        <Col className="center">
                            <img
                                src={
                                    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
                                    this.props.id +
                                    ".png"
                                }
                                width="200"
                                height="200"
                                alt="pokemon"
                            />
                            <h2>{this.capitalize(pokemon.species.name)}</h2>
                            <p>{specie.genera[2].genus}</p>
                        </Col>
                    </Row>
                </div>
                <Row className="margin">
                    <Col>
                        <p>
                            <b>Height: </b>
                            {this.height(pokemon.height)} m
                        </p>
                    </Col>

                    <Col>
                        <p>
                            <b>Weight:</b> {this.height(pokemon.weight)} kg
                        </p>
                    </Col>

                    <Col>
                        <p>
                            <b>Type: </b>

                            {pokemon.types.map(type => {
                                return (
                                    <Badge
                                        pill
                                        className={type.type.name}
                                        key={type.type.name}
                                    >
                                        {type.type.name}
                                    </Badge>
                                );
                            })}
                        </p>
                    </Col>

                    <Col>
                        <p>
                            <b>Habitat:</b>
                            {this.capitalize(habitat)}
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
                        <p>
                            <b>Base Experience: </b>
                            {pokemon.base_experience}
                        </p>
                    </Row>
                    <Row className="margin">
                        <p>
                            <b>Hp:</b> {pokemon.stats[5].base_stat}
                        </p>
                    </Row>
                    <Row className="margin">
                        <p>
                            <b>Attack:</b> {pokemon.stats[4].base_stat}
                        </p>
                    </Row>
                    <Row className="margin">
                        <p>
                            <b>Speed:</b> {pokemon.stats[0].base_stat}
                        </p>
                    </Row>
                    <Row className="margin">
                        <p>
                            <b>Defense:</b> {pokemon.stats[3].base_stat}
                        </p>
                    </Row>
                    <Row className="margin">
                        <p>
                            <b>Special Attack:</b> {pokemon.stats[2].base_stat}
                        </p>
                    </Row>
                    <Row className="margin">
                        <p>
                            <b>Special Defense:</b> {pokemon.stats[1].base_stat}
                        </p>
                    </Row>
                </div>

                <Row>
                    <Col>
                        <h3 className="center"> VideoGames</h3>
                    </Col>
                </Row>
                <div>
                    <CardColumns>
                        {pokemon.game_indices.map(game => {
                            return (
                                <Card border="danger" key={game.version.name}>
                                    <Card.Text className="center">
                                        {this.capitalize(game.version.name)}
                                    </Card.Text>
                                </Card>
                            );
                        })}
                    </CardColumns>
                </div>

                <Row>
                    <Col>
                        <h3 className="center"> Evolutions</h3>
                    </Col>
                </Row>

                <CardGroup className="center">
                    <Card>
                        <Col className="center">
                            <img
                                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
                                width="200"
                                height="200"
                            />
                        </Col>

                        <Card.Title>{evolutions.chain}</Card.Title>
                    </Card>
                    ->
                    <Card>
                        <Col className="center">
                            <img
                                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"
                                width="200"
                                height="200"
                            />
                        </Col>
                        <Card.Title>Charmander</Card.Title>
                    </Card>
                    ->
                    <Card>
                        <Col className="center">
                            <img
                                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
                                width="200"
                                height="200"
                            />
                        </Col>
                        <Card.Title>Charmander</Card.Title>
                    </Card>
                </CardGroup>
            </React.Fragment>
        );
    }
}

export default PokemonDetail;
