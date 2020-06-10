import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
state = {
  allPokemons: [],
  // allPokemonsCopy: [],
  search: '',
  filter: ''
}

componentDidMount(){
  fetch(`http://localhost:3000/pokemon`)
  .then(resp => resp.json())
  .then(pokemons =>{
    this.setState({
      allPokemons: pokemons,
      allPokemonsCopy: pokemons
    })
  })
}

handlerAddPokemon = (e) => {
  const data = {
    "height": 7,
    "weight": 69,
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
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(resp => resp.json())
  .then(newPokemon => {
    this.setState({
      allPokemons: [...this.state.allPokemons, newPokemon]
    })
  })
}

handlerSearch = (e) =>{
  this.setState({
    search: e.target.value
  })
}

handlerFilter = (e) => {
  if(e.target.value === "All"){
    this.setState({
      filter: ''
    })
  }else
    this.setState({
      filter: e.target.value.toLowerCase()
    })
}

render() {
  const searchedPokemons = this.state.allPokemons.filter(pokemon => 
    pokemon.name.toLowerCase().includes(this.state.search.toLowerCase())).filter(pokemon =>
      pokemon.types[0].includes(this.state.filter))
  
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm handlerAddPokemon={this.handlerAddPokemon}/>
        <br />
        <Search handlerSearch={this.handlerSearch} handlerFilter={this.handlerFilter}/>
        <br />
        <PokemonCollection pokemons={searchedPokemons}/>
      </Container>
    )
  }
}

export default PokemonPage
