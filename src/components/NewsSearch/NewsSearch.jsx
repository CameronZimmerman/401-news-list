import React, { Component } from 'react'
import { getArticles } from '../../services/newsApi'
import ArticleList from '../ArticleList/ArticleList'
import Search from '../Search/Search'

export default class NewsSearch extends Component {
  state = {
    loading: true,
    query: '',
    articles: []
  }

  componentDidMount = async() => {
    const articles = await getArticles()
    this.setState({articles, loading: false})
  }

  handleSubmit = async(e) => {
    this.setState({loading: true})
    const queryArticles = await getArticles(this.state.query)
    this.setState({articles: queryArticles, loading: false})
    console.log('submitting from test ')
  }

  handleChange = (e) => {
    this.setState({query: e.target.value})
  }

  render() {
    const {loading, query, articles} = this.state

    if(loading) return <div>Loading</div>

    return (
      <>
        <Search query={query} onChange={this.handleChange} onSubmit={this.handleSubmit}/>
        <ArticleList articles={articles}/>
      </>
    )
  }
}
