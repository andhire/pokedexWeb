import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles/card.css";

function capitalize(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
}
function getNumberUrl(url) {
    var number = "";
    for (let a = 0; a < 3; a++) {
        if (url.charAt(34 + a) === "/") {
            break;
        }
        number += url.charAt(34 + a);
    }
    return number;
}

function PokemonList(props) {
    const [queryList, setQueryList] = React.useState(props.state.data.results);
    React.useMemo(() => {
        const result = props.state.data.results.filter(data => {
            return data.name.includes(props.state.query.toLowerCase());
        });
        setQueryList(result);
    }, [props.state.data.results, props.state.query]);

    return (
        <React.Fragment>
            <div className="display">
                {queryList.map((pokemon, index) => {
                    return (
                        <Link
                            to={"/" + getNumberUrl(pokemon.url).toString()}
                            className="text-reset text-decoration-none a"
                            key={index}
                        >
                            <Card border="dark">
                                <Card.Body className="flex">
                                    <img
                                        height="60"
                                        width="60"
                                        alt="Pokemon "
                                        src={
                                            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
                                            getNumberUrl(pokemon.url) +
                                            ".png"
                                        }
                                    />

                                    <Card.Title className="Card-Title">
                                        {capitalize(pokemon.name)}
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

export default PokemonList;
