import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemons:[], 
    name : '',
    hp : null,
    front : '',
    back : '',
    searchTerm : ''
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
    .then(res=> res.json())
    .then(data=> {
      this.setState({ pokemons: data})
    })
  }

  addNew = pokemon =>this.setState({ pokemons: [...this.state.pokemons,pokemon] })

  searchHandler = e => this.setState({searchTerm: e.target.value})
  

  render() {

    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addNew={this.addNew}/>
        <br />
        <Search searchHandler={this.searchHandler} searchTerm={this.state.searchTerm}/>
        <br />
        <PokemonCollection pokemons={this.state.pokemons} searchTerm={this.state.searchTerm}/>
      </Container>
    )
  }
}

export default PokemonPage
