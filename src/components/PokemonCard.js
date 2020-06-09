import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    frontView: true 
  }

  findHp = (stats) => {
    const hp = stats.find(stat => stat.name === 'hp')
    return hp.value
  }

  render() {

    return (
      <Card>
        <div>
          <div onClick={() => this.setState({ frontView: !this.state.frontView })}className="image">
            <img src={this.state.frontView ? this.props.sprites.front : this.props.sprites.back} alt={this.props.name} />
          </div>
          <div className="content">
            <div className="header">{this.props.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.findHp(this.props.stats)}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
