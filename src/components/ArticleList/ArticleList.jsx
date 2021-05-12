import React from 'react'
import PropTypes from 'prop-types'
import Article from '../Article/Article'

function ArticleList({articles}) {
  return (
    <div>
      <ul aria-label="article-list">
        {articles.map(article => <Article {...article}/>)}
      </ul>
    </div>
  )
}

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }))
}

export default ArticleList

