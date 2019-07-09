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
        evolution: null,
        lastUrl: null
    };

    componentDidMount() {
        this.setState({ lastUrl: this.props.match.params.pokemonId });
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

            this.setState({
                data: data
            });
            const responseSpecie = await fetch(this.state.data.species.url);
            const dataSpecie = await responseSpecie.json();

            this.setState({ specie: dataSpecie });

            const responseEvolution = await fetch(
                this.state.specie.evolution_chain.url
            );
            const dataEvolution = await responseEvolution.json();
            this.setState({ evolution: dataEvolution, loading: false });
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
                        evolution={this.state.evolution}
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
        console.log(this.state.lastUrl);
        if (!this.state.loading) {
            if (this.state.lastUrl == null) {
            } else if (
                this.state.lastUrl !== this.props.match.params.pokemonId
            ) {
                window.location.reload();
            }
            return true;
        } else {
            return false;
        }
    }
}

export default Pokemon;
