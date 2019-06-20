import React from "react";
import { Card, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles/card.css";

class PokemonList extends React.Component {
    capitalize(name) {
        return name.charAt(0).toUpperCase() + name.slice(1);
    }

    render() {
        if (this.isReady()) {
            return (
                <React.Fragment>
                    <div className="display">
                        {this.props.state.data.results.map((pokemon, index) => {
                            return (
                                <Link
                                    to={(index + 1).toString()}
                                    className="text-reset text-decoration-none a"
                                    key={index}
                                >
                                    <Card border="dark">
                                        <Card.Body className="flex">
                                            <img
                                                height="60"
                                                width="60"
                                                src={
                                                    this.props.state
                                                        .pokemonData[index]
                                                        .sprites.front_default
                                                }
                                            />

                                            <Card.Title className="Card-Title">
                                                {this.capitalize(pokemon.name)}
                                            </Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            );
                        })}
                    </div>
                </React.Fragment>
            );
        } else {
            return (
                <Spinner
                    animation="border"
                    role="status"
                    variant="danger"
                    className="spinner"
                >
                    <span className="sr-only">Loading...</span>
                </Spinner>
            );
        }
    }

    isReady() {
        if (
            this.props.state.pokemonData.length == this.props.pokemonLenght &&
            this.props.state.data
        ) {
            return true;
        } else {
            return false;
        }
    }
}

export default PokemonList;
