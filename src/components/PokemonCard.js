import React from 'react'
import { Card } from 'semantic-ui-react'
import FrontCard from './FrontCard'
import BackCard from './BackCard'


class PokemonCard extends React.Component {

  state = {
    frontCrdDisplayed: true
  }

  toggleCard = () => {
    this.setState({
      frontCrdDisplayed: !this.state.frontCrdDisplayed
    })
  }

  render() {

    const { eachPokemon } = this.props 
    const hp = eachPokemon.stats.find(stat => stat.name === 'hp').value

    return (
      <Card>
        <div>
          <div className="image" onClick={this.toggleCard}>
            {this.state.frontCrdDisplayed ? <FrontCard frontImg={eachPokemon.sprites.front} /> :
            <BackCard backImg={eachPokemon.sprites.back} />}
          </div>
          <div className="content">
            <div className="header">{eachPokemon.name}</div>
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
