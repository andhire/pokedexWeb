import React from "react";
import { Card, CardGroup, CardDeck, CardColumns } from "react-bootstrap";

import "./styles/card.css";
class PokemonDetail extends React.Component {
    capitalize(name) {
        return name.charAt(0).toUpperCase() + name.slice(1);
    }

    render() {
        return (
            <React.Fragment>
                {/* <CardColumns />
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
                </div> */}
                <Spinner
                    animation="border"
                    role="status"
                    variant="danger"
                    className="spinner"
                >
                    <span className="sr-only">Loading...</span>
                </Spinner>
            </React.Fragment>
        );
    }
}

export default PokemonDetail;
