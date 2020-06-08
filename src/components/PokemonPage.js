import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemon: [],
    search: ''
  }

  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
      .then(res => res.json())
      .then(pokemon => this.setState({pokemon}))
  }

  handleSearch = e => {
      this.setState({search: e.target.value})
  }

  handleAdd = () => {
    fetch("http://localhost:3000/pokemon")
      .then(res => res.json())
      .then(pokemon => this.setState({pokemon}))
  }

  render() {
    let searchResults = this.state.pokemon.filter(p => {
      return p.name.includes(this.state.search)
    })
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm add={this.handleAdd} />
        <br />
        <Search search={this.handleSearch}/>
        <br />
        <PokemonCollection pokemon={searchResults}/>
      </Container>
    )
  }
}

export default PokemonPage
