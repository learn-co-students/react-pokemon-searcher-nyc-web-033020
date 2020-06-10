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

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    event.persist()

    const newPokemon = {
      name: this.state.name,
      stats: [{
        value: this.state.hp,
        name: 'hp'
      }],
      sprites: {
        front: this.state.frontUrl,
        back: this.state.backUrl,
      }
    }

    const options = {
      method: "POST",
      headers: {
        "Content-Type" : "application/json",
        "Accept:" : "application/json"
      },
      body: JSON.stringify(newPokemon)
    }

    fetch(`http://localhost:3000/pokemon`, options)
    .then(response => response.json())
    .then(this.props.reRender)
  }

  //all thats missing is I need to do the post request
  // i also need to pass the page reRenderer for after the POST event is made
  // Post will cause us to add an element to our array, so we must rerender the entire array
  // using the original fetch
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
