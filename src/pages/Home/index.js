import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { api } from '../../services/api'
import './styles.css'

export const Home = () => {
  const [filmes, setFilmes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadFilms() {
      const response = await api.get('movie/now_playing', {
        params: {
          api_key: 'fecd7450ab2f3fb03c1527ccc730a3aa',
          page: 1,
        },
      })

      setFilmes(response.data.results.slice(0, 10))
      setLoading(false)
    }

    loadFilms()
  }, [])

  if (loading) {
    return (
      <div className='loading'>
        <h2>Loading films...</h2>
      </div>
    )
  }

  return (
    <div className='container'>
      <div className='list'>
        {filmes.map((film) => (
          <article key={film.id}>
            <strong>{film.title}</strong>
            <img src={`https://image.tmdb.org/t/p/original/${film.poster_path}`} alt={film.title} />
            <Link to={`/film/${film.id}`}>Acessar</Link>
          </article>
        ))}
      </div>
    </div>
  )
}
