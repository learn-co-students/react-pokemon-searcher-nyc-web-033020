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

  submitPokemon = (event) => {
    event.preventDefault()
    const newP = {
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
    this.props.submitForPatch(newP)
    this.setState({
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    })
  }

  handleOnChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.submitPokemon}>
          <Form.Group widths="equal">
            <Form.Input fluid onChange={this.handleOnChange} label="Name" placeholder="Name" name="name" value={this.state.name}/>
            <Form.Input fluid onChange={this.handleOnChange} label="hp" placeholder="hp" name="hp" value={this.state.hp}/>
            <Form.Input fluid onChange={this.handleOnChange} label="Front Image URL" placeholder="url" name="frontUrl" value={this.state.frontUrl} />
            <Form.Input fluid onChange={this.handleOnChange} label="Back Image URL" placeholder="url" name="backUrl" value={this.state.backUrl}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
