import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

const POKE_URL = "http://localhost:3000/pokemon"

class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    search: '',
  }

  componentDidMount(){
    fetch(POKE_URL)
      .then(resp => resp.json())
      .then(pokemons => this.setState({ pokemons }))
  }

  handleSearch = (e) => {
    this.setState({ search: e.target.value})
  };

  addPokemon = (pokemon) => {
    let newArray = [...this.state.pokemons]
    newArray.unshift(pokemon)
    this.setState({ pokemons: newArray })
  };

  render() {

    const {pokemons, search} = this.state
    
    const filteredPokemons = pokemons.filter(
      pokemon => pokemon.name.includes(search.toLowerCase()))

    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
        <br />
        <Search 
          search={this.state.search} 
          handleSearch={this.handleSearch}
          filterPokemons={this.filterPokemons}
        />
        <br />
        <PokemonCollection pokemons={filteredPokemons}/>
      </Container>
    )
  }
}

export default PokemonPage
