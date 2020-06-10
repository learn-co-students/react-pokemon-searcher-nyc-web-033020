import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state={
    on: false
  }

  toggle = () => {
    let off = !this.state.on 
    this.setState({on : off})
  }

  render() {
    const {name,stats,sprites} = this.props.pokemon
    const target = stats.find(a => a.name === 'hp').value

    return (
      <Card>
        <div>
          <div className="image"  onClick={this.toggle}>
          {this.state.on? 
          <img alt="oh no!" src= {sprites.back}/> 
          : <img alt="oh no!" src= {sprites.front}/>}
          </div>

          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
          <span> <i className="icon heartbeat red" /> {target}</span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
