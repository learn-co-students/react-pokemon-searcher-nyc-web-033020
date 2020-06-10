import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    toggle: true
  }
  
  handlerToggle = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  }

  render() {
    return (
      <Card>
        <div onClick={this.handlerToggle}>
          <div className="image">
            {this.state.toggle ? <img src={this.props.sprites.front} alt={this.props.name}/> : <img src={this.props.sprites.back} alt={this.props.name}/>}
          </div>
          <div className="content">
            <div className="header">{this.props.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.stats[5].value} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
