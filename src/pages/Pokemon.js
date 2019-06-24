import React from "react";
import PokemonDetail from "../components/PokemonDetail";

import "./syles/home.css";
class Pokemon extends React.Component {
    state = {
        loading: true,
        error: null,
        data: {
            results: []
        }
    };

    componentDidMount() {
        this.fetchPokemons();
    }

    fetchPokemons = async () => {
        this.setState({ loading: true, error: null });
        try {
            const response = await fetch(
                "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=807"
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
        return (
            <React.Fragment>
                <PokemonDetail />
            </React.Fragment>
        );
    }
}

export default Pokemon;
