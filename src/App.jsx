
import Article from './components/Article'


export default  function App() {
  let articles = [
    {title : "Title 1",
    article : "Article 1"},
    {title : "Title 2",
    article : "Article 2"},

  ]
  return (
    <>
    <h1>Articles</h1>
    {articles.map((article, index) => (
      <Article key={index} title={article.title} article={article.article} />
    ))}
    </>
  )

}