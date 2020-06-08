import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

const url = 'http://localhost:3000/pokemon'

class PokemonPage extends React.Component {
  state = {
    pokemons: [],
    search: ''
  }

  componentDidMount(){
    fetch(url)
    .then(res => res.json())
    .then(pokemons => this.setState({ pokemons }))
  }

  searchingForPokemon = (event) => {
    this.setState({ search: event.target.value })
  }

  submitForPatch = (newPoke) => {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json'
      }, body: JSON.stringify(newPoke)
    }).then(res => res.json())
    .then(poke => this.setState({ pokemons: [...this.state.pokemons, poke]}))
  }



  render() {
    let pokemonList = this.state.pokemons.filter(pokemon => pokemon.name.includes(this.state.search.toLowerCase()) )
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm submitForPatch={this.submitForPatch} />
        <br />
        <Search search={this.state.search} searchingForPokemon={this.searchingForPokemon}/>
        <br />
        <PokemonCollection pokemonList={pokemonList}/>
      </Container>
    )
  }
}

export default PokemonPage
