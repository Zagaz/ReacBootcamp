
import Article from './components/Article'


export default function App() {
  // An array of objects with the properties id, title and article od Startrek captains.
  let articles = [
    {
      id: 0,
      title: "Jean-luc Picard",
      article: "Engage"
    },
    {
      id:1,
      title: "James T. Kirk",
      article: "Beam me up, Scotty"
    },
    {
      id:2,
      title: "Benjamin Sisko",
      article: "It's real"
    },
    {
      id:3,
      title: "Kathryn Janeway",
      article: "There's coffee in that nebula"
    },
    {
      id:4,
      title: "Jonathan Archer",
      article: "I'm Jonathan Archer"
    }

  ]

  let content =  articles.map((article, id) => (
    <Article key={id} title={article.title} article={article.article} />
  ))

  return (
    <>
      <h1>Star Trek Captains</h1>
      {content}
    </>
  )

}