import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemon: [],
    searchTerm: ''
  }
  
  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(pokemonData => {
      this.setState({
        pokemon: pokemonData
      })
    })
  }

  handleSearch = event => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  addPokemon = pokemon => {
    this.setState({
      pokemon: [
        ...this.state.pokemon, pokemon
      ]
    })
  }

  render() {
    console.log(this.state.pokemon)

    const searchPokemon = this.state.pokemon.filter(ePokemon => ePokemon.name.includes(this.state.searchTerm))
    
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon} />
        <br />
        <Search handleSearch={this.handleSearch}/>
        <br />
        {/* <PokemonCollection pokemon={this.state.pokemon} /> */}
        <PokemonCollection pokemon={searchPokemon} />
      </Container>
    )
  }
}

export default PokemonPage
