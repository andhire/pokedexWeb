import React from "react";
import { Card, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles/card.css";
import { throwStatement } from "@babel/types";

class PokemonList extends React.Component {
    capitalize(name) {
        return name.charAt(0).toUpperCase() + name.slice(1);
    }

    render() {
        const queryList = this.props.state.data.results.filter(data => {
            return data.name.includes(this.props.state.query.toLowerCase());
        });

        return (
            <React.Fragment>
                <div className="display">
                    {queryList.map((pokemon, index) => {
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
                                                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
                                                (index + 1) +
                                                ".png"
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
    }
}

export default PokemonList;
