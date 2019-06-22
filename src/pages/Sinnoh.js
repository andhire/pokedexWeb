import React from "react";
import PokemonList from "../components/PokemonList";
import { Spinner, InputGroup, FormControl } from "react-bootstrap";

import "./syles/home.css";
class Sinnoh extends React.Component {
    state = {
        loading: true,
        error: null,
        data: {
            results: []
        },
        query: ""
    };

    componentDidMount() {
        this.fetchPokemons();
    }

    fetchPokemons = async () => {
        this.setState({ loading: true, error: null });
        try {
            const response = await fetch(
                "https://pokeapi.co/api/v2/pokemon/?offset=386&limit=107"
            );
            const data = await response.json();
            this.setState({
                data: data,
                loading: false,
                length: data.results.length
            });
        } catch (error) {
            this.setState({ error: error, loading: false });
        }
    };

    render() {
        if (this.isReady()) {
            return (
                <React.Fragment>
                    <InputGroup size="lg" className="search">
                        <FormControl
                            aria-label="Large"
                            aria-describedby="inputGroup-sizing-sm"
                            type="text"
                            placeholder="Search Pokemon..."
                            size="lg"
                            value={this.state.query}
                            onChange={e => {
                                this.setState({ query: e.target.value });
                            }}
                        />
                    </InputGroup>

                    <PokemonList
                        state={this.state}
                        pokemonLenght={this.state.length}
                    />
                </React.Fragment>
            );
        } else {
            return (
                <div>
                    <InputGroup size="lg" className="search">
                        <FormControl
                            aria-label="Large"
                            aria-describedby="inputGroup-sizing-sm"
                            type="text"
                            placeholder="Search Pokemon..."
                            size="lg"
                            value={this.state.query}
                            onChange={e => {
                                this.setState({ query: e.target.value });
                            }}
                        />
                    </InputGroup>
                    <Spinner
                        animation="border"
                        role="status"
                        variant="danger"
                        className="spinner"
                    >
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                </div>
            );
        }
    }

    isReady() {
        if (!this.state.loading) {
            return true;
        } else {
            return false;
        }
    }
}

export default Sinnoh;
