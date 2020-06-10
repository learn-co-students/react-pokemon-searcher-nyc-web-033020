import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      })
    }

    handleSubmit = event => {
      event.preventDefault()
      event.persist()

      const bulbasaur = {
        name: this.state.name,
        stats: [
          {
            value: this.state.hp,
            name: 'hp'
          }
        ],
        sprites: {
          front: this.state.frontUrl,
          back: this.state.backUrl
        }
      }
      

      fetch('http://localhost:3000/pokemon', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }, 
        body: JSON.stringify(bulbasaur)
      })
        .then(res => res.json())
        .then(this.props.addPokemon)
    }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" onChange={this.handleChange} placeholder="Name" name="name" />
            <Form.Input fluid label="hp" onChange={this.handleChange} placeholder="hp" name="hp" />
            <Form.Input fluid label="Front Image URL" onChange={this.handleChange} placeholder="url" name="frontUrl" />
            <Form.Input fluid label="Back Image URL" onChange={this.handleChange} placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
