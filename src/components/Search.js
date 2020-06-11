import React from 'react'

const Search = props => {
  const {search, handleSearch} = props

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={search} onChange={handleSearch} />
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search
