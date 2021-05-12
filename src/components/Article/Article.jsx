import React from 'react'
import PropTypes from 'prop-types'

function Article({title, author, description}) {
  return (
    <div>
      <p>{title}</p>
      <p>by: {author}</p>
      <p>{description}</p>
    </div>
  )
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default Article

