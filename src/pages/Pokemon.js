import React from "react";
import PokemonDetail from "../components/PokemonDetail";
import { Spinner } from "react-bootstrap";
import "./syles/home.css";

class Pokemon extends React.Component {
    state = {
        loading: true,
        error: null,
        data: {},
        specie: {},
        evolution: {}
    };

    componentDidMount() {
        this.fetchPokemon();
    }

    fetchPokemon = async () => {
        this.setState({ loading: true, error: null });
        try {
            const response = await fetch(
                "https://pokeapi.co/api/v2/pokemon/" +
                    this.props.match.params.pokemonId
            );
            const data = await response.json();
            console.log(data);
            this.setState({
                data: data
            });
            const responseSpecie = await fetch(this.state.data.species.url);
            const dataSpecie = await responseSpecie.json();

            this.setState({ loading: false, specie: dataSpecie });
        } catch (error) {
            this.setState({ error: error, loading: false });
        }
    };
    render() {
        if (this.isReady()) {
            return (
                <React.Fragment>
                    <PokemonDetail
                        pokemon={this.state.data}
                        specie={this.state.specie}
                        id={this.props.match.params.pokemonId}
                        evolutions={this.state.evolution}
                    />
                </React.Fragment>
            );
        } else if (this.error) {
            return <p>Upps ocurrio algo</p>;
        } else {
            return (
                <div>
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
            this.retrieveEvolution();
            return true;
        } else {
            return false;
        }
    }
    retrieveEvolution = async () => {
        const responseEvolution = await fetch(
            this.state.specie.evolution_chain.url
        );
        const dataEvolution = await responseEvolution.json();
        console.log(dataEvolution);
    };
}

export default Pokemon;
