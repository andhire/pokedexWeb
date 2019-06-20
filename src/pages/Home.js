import React from "react";
import PokemonList from "../components/PokemonList";
import Navbara from "../components/Navbar";
import { throwStatement } from "@babel/types";

class Home extends React.Component {
    state = {
        loading: true,
        error: null,
        data: {
            results: []
        },
        pokemonData: [],
        length: 0
    };
    componentDidMount() {
        this.fetchPokemons();
    }

    fetchPokemons = async () => {
        this.setState({ loading: true, error: null });
        try {
            const response = await fetch(
                "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=21"
            );
            const data = await response.json();
            this.setState({
                data: data,
                loading: false,
                length: data.results.length
            });

            for (let i = 0; i < this.state.data.results.length; i++) {
                const pokemonResponse = await fetch(
                    this.state.data.results[i].url
                );
                const pokemonData = await pokemonResponse.json();
                this.setState({
                    pokemonData: [...this.state.pokemonData, pokemonData]
                });
            }
        } catch (error) {
            this.setState({ error: error, loading: false });
        }
    };
    render() {
        return (
            <React.Fragment>
                <PokemonList
                    state={this.state}
                    pokemonLenght={this.state.length}
                />
            </React.Fragment>
        );
    }
}

export default Home;
