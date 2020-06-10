import React from 'react'

const Search = props => {

  
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={props.handleSearch} />
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search


//onchannge we want a state, we want what the user types in to appear
//change this to a controlled form