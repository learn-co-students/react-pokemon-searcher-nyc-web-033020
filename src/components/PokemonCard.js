import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  getHp = () => {
    return this.props.stats.filter(stat => stat.name === 'hp')[0].value
  }

  getSpriteWithToggle = e => {
    console.log(e.target)
    e.target.src = e.target.src === this.props.sprites.front ? this.props.sprites.back :
      this.props.sprites.front
  }

  render() {
    let {name, height, weight, abilities, types, sprites, moves, stats} = this.props
    return (
      <Card>
        <div>
          <div className="image">
            <img src={sprites.front} onClick={this.getSpriteWithToggle} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
                {this.getHp()} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
