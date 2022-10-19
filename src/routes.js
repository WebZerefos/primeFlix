import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Film } from './pages/Film'
import { Erro } from './pages/Erro'
import { Header } from './components/Header'
import { Favorites } from './pages/Favorites'

export const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/film/:id' element={<Film />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='*' element={<Erro />} />
      </Routes>
    </BrowserRouter>
  )
}
