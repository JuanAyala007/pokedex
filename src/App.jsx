
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePages'
import PokedexPage from './pages/PokedexPage'
import PokeDetailPage from './pages/PokeDetailPages'
import ProtetedRotes from './pages/ProtetedRotes'


function App() {

//  const trainer = useSelector(states => states.trainer)

//  console.log(trainer)

  return (
    <div>
  
      <Routes>
        <Route path = "/" element = {<HomePage />} />
        <Route element={<ProtetedRotes />}>
          <Route path ="/pokedex" element = {<PokedexPage />} />
          <Route path ="/pokedex/:name" element = {<PokeDetailPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
