import React from "react";
import { Card } from "semantic-ui-react";

class PokemonCard extends React.Component {
  state = {
    clicked: false,
  };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    const { name, sprites, stats } = this.props.pokemon;
    const stat = stats.filter((obj) => obj.name === "hp");
    return (
      <Card>
        <div onClick={this.handleClick}>
          <div className="image">
            <img
              src={this.state.clicked ? sprites.back : sprites.front}
              alt="oh no!"
            />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {stat[0].value + " hp"}
            </span>
          </div>
        </div>
      </Card>
    );
  }
}

export default PokemonCard;
