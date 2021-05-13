import React from 'react'
import PropTypes from 'prop-types'

function Search({query, onSubmit, onChange}) {
  return (
    <form onSubmit={onSubmit}>
      <label for="article-search">Search</label>
      <input value={query} id="article-search" type="text" name="search" onChange={onChange} placeholder="Search"/>
    </form>
  )
}

Search.propTypes = {
  query: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Search

