import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { api } from '../../services/api'
import { toast } from 'react-toastify'
import './styles.css'

// https://www.themoviedb.org/movie/760161-orphan-first-kill

export const Film = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const [film, setFilm] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadFilm() {
      await api
        .get(`/movie/${id}`, {
          params: {
            api_key: 'fecd7450ab2f3fb03c1527ccc730a3aa',
          },
        })
        .then((response) => {
          setFilm(response.data)
          setLoading(false)
        })
        .catch(() => {
          navigate('/', { replace: true })
          return
        })
    }

    loadFilm()

    return () => {
      console.log('Component unmonted')
    }
  }, [id, navigate])

  function addFavorite() {
    const listFavorite = localStorage.getItem('@primeFlix')

    let savedFilms = JSON.parse(listFavorite) || []

    const hasFilm = savedFilms.some((savedFilm) => savedFilm.id === film.id)

    if (hasFilm) {
      toast.warn('Film already exists in your list!')
      return
    }

    savedFilms.push(film)
    localStorage.setItem('@primeFlix', JSON.stringify(savedFilms))
    toast.success('Film added to favorites successfully ')
  }

  if (loading) {
    return (
      <div className='loading'>
        <h2>Loading films...</h2>
      </div>
    )
  }
  return (
    <div className='film-info'>
      <h1>{film.title}</h1>
      <img src={`https://image.tmdb.org/t/p/original/${film.backdrop_path}`} alt={film.title} />

      <h3>Overview</h3>
      <span>{film.overview}</span>

      <strong>Rating: {film.vote_average} of 10</strong>

      <div className='buttons'>
        <button onClick={addFavorite}>Save</button>
        <button>
          <a
            href={`https://www.youtube.com/results?search_query=trailer+${film.title}`}
            target='_blank'
            rel='noreferrer noopener'
          >
            Trailer
          </a>
        </button>
      </div>
    </div>
  )
}
