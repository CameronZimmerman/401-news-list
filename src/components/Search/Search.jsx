import React from 'react'
import PropTypes from 'prop-types'

function Search({query, onSubmit, onChange}) {
  return (
    <form onSubmit={onSubmit}>
      <label for="article-search"/>
      <input value={query} name="article-search" type="text" onChange={onChange}/>
    </form>
  )
}

Search.propTypes = {
  query: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Search

