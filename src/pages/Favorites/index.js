import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import './styles.css'

export const Favorites = () => {
  const [films, setFilms] = useState([])

  useEffect(() => {
    const myList = localStorage.getItem('@primeFlix')
    setFilms(JSON.parse(myList) || [])
  }, [])

  function deleteFilm(id) {
    let filmsFilter = films.filter((item) => {
      return item.id !== id
    })
    setFilms(filmsFilter)
    localStorage.setItem('@primeFlix', JSON.stringify(filmsFilter))
    toast.error('Film deleted successfully')
  }

  return (
    <div className='my-films'>
      <h1>Meus filmes favorites</h1>
      {films.length === 0 && <span>Você ainda não possui filmes favoritos.</span>}
      <ul>
        {films.map((item) => (
          <li key={item.id}>
            <span>{item.title}</span>
            <div>
              <Link to={`/film/${item.id}`}>Details</Link>
              <button onClick={() => deleteFilm(item.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
