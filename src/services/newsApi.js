export const getArticles = async(query = 'today') => {
  const res = await fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=${process.env.API_KEY}&sortBy=popularity&count=20`)
  const { articles } = await res.json()
  return articles.map(article => ({
    title: article.title,
    author: article.author,
    description: article.description
  }))
}