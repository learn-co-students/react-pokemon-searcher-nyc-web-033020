import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

const baseUrl = "http://localhost:3000/pokemon/";

class PokemonPage extends React.Component {
  state = {
    pokemon: [],
    search: "",
    newPokemon: {
      name: "",
      front: "",
      back: "",
      hp: "",
    },
  };

  componentDidMount() {
    fetch(baseUrl)
      .then((res) => res.json())
      .then((pokemon) => this.setState({ pokemon: pokemon }));
  }

  handleSearch = (event) => {
    // eslint-disable-next-line
    const value = event.target.value;
    this.setState({ search: value });
  };

  handleForm = (event) => {
    const target = event.target;
    this.setState({
      newPokemon: { ...this.state.newPokemon, [target.name]: target.value },
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.postPokemon();
  };

  postPokemon = () => {
    const { name, front, back, hp } = this.state.newPokemon;

    fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        sprites: {
          front: front,
          back: back,
        },
        stats: [
          {
            name: "hp",
            value: hp,
          },
        ],
      }),
    })
      .then((res) => res.json())
      .then((poke) =>
        this.setState({ pokemon: [poke, ...this.state.pokemon] })
      );
  };

  render() {
    console.log("pokemon: ", this.state.pokemon[0]);
    const pokemon = this.state.pokemon;
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm
          handleForm={this.handleForm}
          handleSubmit={this.handleSubmit}
          newPokemon={this.state.newPokemon}
        />
        <br />
        <Search handleSearch={this.handleSearch} />
        <br />
        <PokemonCollection
          pokemon={pokemon.filter((p) => p.name.includes(this.state.search))}
        />
      </Container>
    );
  }
}

export default PokemonPage;
