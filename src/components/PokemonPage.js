import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  state = {
    pokemons: [],
    search: '',
    filter: ''
  } 

  componentDidMount() {
    fetch(`http://localhost:3000/pokemon`)
    .then(res => res.json())
    .then(data => {
      this.setState({
        pokemons: data
      })
    })  
  }

  handleSearch = (e) => {
    this.setState({
      search: e.target.value
    })
  }

  
  addPokemon = (e) => {
    const pokeData = {
      "name": e.target.name.value,
      "stats": [
        {
          "value": 80,
          "name": "special-defense"
        },
        {
          "value": 80,
          "name": "special-attack"
        },
        {
          "value": 63,
          "name": "defense" 
        },
        {
          "value": 62,
          "name": "attack"
        },
        {
          "value": 60,
          "name": "speed"
        },
        {
          "value": e.target.hp.value,
          "name": "hp"
        }
      ],
      "types": ["grass", "poison"],
      "sprites": {
        "front": e.target.frontUrl.value,
        "back": e.target.backUrl.value
      }
    }

    fetch(`http://localhost:3000/pokemon`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(pokeData) }) 
    .then(res => res.json())
    .then(newPokemon => {
      this.setState({
        pokemons: [...this.state.pokemons, newPokemon]
      })
    })
  }


  render() {
    const searchPokemon = this.state.pokemons.filter(pokemon => 
    pokemon.name.toLowerCase().includes(this.state.search.toLowerCase()))
      
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
        <br />
        <Search handleSearch={this.handleSearch}/>
        <br />
        <PokemonCollection pokemons={searchPokemon}/>
      </Container>
    )
  }
}

export default PokemonPage
