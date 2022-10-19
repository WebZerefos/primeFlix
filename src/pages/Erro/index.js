import { Link } from 'react-router-dom'
import './styles.css'
export const Erro = () => {
  return (
    <div className='not-found'>
      <h1>404</h1>
      <h2>Ops! page no found.</h2>
      <Link to='/'>Back to home</Link>
    </div>
  )
}
