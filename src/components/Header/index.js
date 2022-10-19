import './style.css'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header>
      <Link to='/' id='film' className='logo'>
        PRIME FLIX
      </Link>
      <Link to='/favorites' id='film' className='favoritos'>
        Meus filmes
      </Link>
    </header>
  )
}
