import React from 'react'

const Search = props => {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={props.handlerSearch} placeholder="Look Pokemon by name"/>
        <i className="search icon" />
      </div>
        <select onChange={props.handlerFilter}>
          <option value="All">All</option>
          <option value="Water">Water</option>
          <option value="Fire">Fire</option>
          <option value="Grass">Grass</option>
        </select>
    </div>
  )
}

export default Search
