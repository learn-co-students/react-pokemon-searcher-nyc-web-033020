import React from "react";
import { Form } from "semantic-ui-react";

class PokemonForm extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      hp: "",
      frontUrl: "",
      backUrl: "",
    };
  }

  render() {
    const { name, front, back, hp } = this.props.newPokemon;
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form
          onSubmit={() => {
            console.log("submitting form...");
          }}
        >
          <Form.Group widths="equal" onChange={this.props.handleForm}>
            <Form.Input
              fluid
              label="Name"
              placeholder="Name"
              name="name"
              value={name}
            />
            <Form.Input
              fluid
              label="hp"
              placeholder="hp"
              name="hp"
              type="number"
              value={hp}
            />
            <Form.Input
              fluid
              label="Front Image URL"
              placeholder="url"
              name="front"
              value={front}
            />
            <Form.Input
              fluid
              label="Back Image URL"
              placeholder="url"
              name="back"
              value={back}
            />
          </Form.Group>
          <Form.Button onClick={this.props.handleSubmit}>Submit</Form.Button>
        </Form>
      </div>
    );
  }
}

export default PokemonForm;
