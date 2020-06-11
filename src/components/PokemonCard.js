import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    isFront: true
  }

  handleClick = () => {
    this.setState(prevState => {
      return {
        isFront: !prevState.isFront
      }
    })
  };

  render() {
    const {name, sprites, stats} = this.props
    const hpStat = stats.find(stat => stat.name === "hp")
    const hp = hpStat.value
    const isFront = this.state.isFront

    return (
      <Card>
        <div>
          <div className="image">
            <img 
              src={ isFront ? sprites.front : sprites.back} 
              alt={name} 
              onClick={this.handleClick}
            />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
