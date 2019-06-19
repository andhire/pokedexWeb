import React from "react";
import { Card, CardGroup, CardDeck, CardColumns } from "react-bootstrap";

import "./styles/card.css";
class PokemonList extends React.Component {
    capitalize(name) {
        return name.charAt(0).toUpperCase() + name.slice(1);
    }

    render() {
        return (
            <React.Fragment>
                <CardColumns />
                <div className="display">
                    {this.props.state.data.results.map((pokemon, index) => {
                        return (
                            <Card border="dark" className="card " key={index}>
                                <Card.Body className="flex">
                                    {this.contains(index)}

                                    <Card.Title className="Card-Title">
                                        {this.capitalize(pokemon.name)}
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        );
                    })}
                </div>
            </React.Fragment>
        );
    }
    contains(index) {
        if (this.props.state.pokemonData.length == this.props.pokemonLenght) {
            return (
                <img
                    height="60"
                    width="60"
                    src={
                        this.props.state.pokemonData[index].sprites
                            .front_default
                    }
                />
            );
        } else {
            return "";
        }
    }
}

export default PokemonList;
