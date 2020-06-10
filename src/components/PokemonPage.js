import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  
  state= {
    pokemon: [],
    search: ''
  }

  handleSearch = (event) => {
    this.setState({search: event.target.value})
  }

  fetchAllPokemon = () => {
    fetch(`http://localhost:3000/pokemon`)
      .then(resp => resp.json())
      .then(pokemon => {
        this.setState({pokemon})
      })
  }

  componentDidMount(){
    this.fetchAllPokemon()
  }

  //also add a way to filter pokemon by type ie)grass

  render() {
    const searchPokemon = this.state.pokemon.filter(pokemon => pokemon.name.includes(this.state.search))
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm reRender={this.fetchAllPokemon} />
        <br />
        <Search handleSearch={this.handleSearch}/>
        <br />
        <PokemonCollection pokemon={searchPokemon}/>
      </Container>
    )
  }
}

export default PokemonPage

//in order to filter you must filter through the pokemon list