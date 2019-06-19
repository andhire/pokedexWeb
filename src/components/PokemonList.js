import React from "react";
import { Card } from "react-bootstrap";
import { thisExpression } from "@babel/types";

class PokemonList extends React.Component {
    capitalize(name) {
        return name.charAt(0).toUpperCase() + name.slice(1);
    }

    render() {
        return (
            <React.Fragment>
                <ul>
                    {this.props.state.data.results.map((pokemon, index) => {
                        return (
                            <Card key={index}>
                                <Card.Header>
                                    {this.capitalize(pokemon.name)}
                                </Card.Header>
                                <Card.Body>
                                    <Card.Title>
                                        {this.contains(index)}
                                    </Card.Title>
                                    <Card.Img />
                                    <Card.Text>
                                        Charmander el pokemon prro
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        );
                    })}
                </ul>
            </React.Fragment>
        );
    }
    contains(index) {
        if (this.props.state.pokemonData.length == 20) {
            return (
                <img
                    height="40"
                    width="40"
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
