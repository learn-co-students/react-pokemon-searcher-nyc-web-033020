import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      front: '',
      back: ''
    }
  }

  changeHandler = event => this.setState({[event.target.name] : event.target.value})
  

  submitHandler = event => {
    event.preventDefault()
    
    let newPokemon = {name: this.state.name,
      sprites:{front:this.state.front, back:this.state.back},
      stats:[ {
          "value": 0,
          "name": "speed"
        },
        {
          "value": 0,
          "name": "special-defense"
        },
        {
          "value": 0,
          "name": "special-attack"
        },
        {
          "value": 0,
          "name": "defense"
        },
        {
          "value": 0,
          "name": "attack"
        },
        {
          "value": parseInt(this.state.hp,10),
          "name": "hp"
        }
      ]
    } 
      fetch('http://localhost:3000/pokemon',{
        method:"post",
        headers:{
          accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newPokemon)
      })
      .then(r=> r.json())
      .then(data=> {
        this.props.addNew(data)
      })
      this.setState({name: '',hp: '', front: '', back: ''})
  }

  

  render() {
    console.log("form new", this.state)
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.submitHandler}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" value={this.state.name} onChange={this.changeHandler}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp"  value={this.state.hp}  onChange={this.changeHandler} />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="front"  value={this.state.front} onChange={this.changeHandler} />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="back"  value={this.state.back} onChange={this.changeHandler}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
