export const getArticles = () => {
  const res = await fetch('https://newsapi.org/v2/everything?api')
  const { articles } = await res.json()

  return articles.map(article => ({
    title: article.title,
    author: article.author,
    description: article.description
  }))
}