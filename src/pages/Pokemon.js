import React from "react";
import { Card, CardGroup, Badge } from "react-bootstrap";

class Pokemon extends React.Component {
    render() {
        return (
            <React.Fragment>
                {/* <Spinner
                    animation="border"
                    role="status"
                    variant="danger"
                    className="spinner"
                >
                    <span className="sr-only">Loading...</span>
                </Spinner> */}
                <h2>Charmander</h2>
                <img
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
                    width="200"
                    height="200"
                />
                <p>Charmander el pokemon flama</p>
                <p>Weight: 65kg</p>
                <p>height: 4m</p>

                <p>Tipo:</p>
                <Badge pill variant="danger">
                    Fire
                </Badge>
                <h3>Stats</h3>
                <p>Base Experience: 100</p>
                <p>Hp: 100ps</p>
                <p>Attack: 50</p>
                <p>Speed: 14</p>
                <p>Defense: 100</p>
                <p>Special Attack: 15</p>
                <p>Special Defense: 50</p>

                <h3>VideoGames</h3>
                <p>Black</p>
                <p>Fire</p>

                <h3>Habitat</h3>
                <p>Mountains</p>
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
                </CardGroup>
            </React.Fragment>
        );
    }
}

export default Pokemon;
