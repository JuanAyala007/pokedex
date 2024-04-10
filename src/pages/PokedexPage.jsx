import { useSelector } from "react-redux"
import useFetch from "../Hooks/useFetch"
import { useEffect, useRef, useState } from "react"
import ListPokemons from "../components/PokedexPage/ListPokemons"
import SelectType from "../components/PokedexPage/SelectType"
import '../components/styles/pokedexPage.css'


const PokedexPage = () => {

  const [pokeSearch, setPokeSearch] = useState()

  const [typeSelect, setTypeSelect] = useState('allpokemons')

  const inputSearch = useRef()

   const trainer = useSelector(states => states.trainer )

   const url = ("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")

   const [pokemons, getPokemons] = useFetch(url)

   useEffect(() => {
    getPokemons()
   }, [])

  const handleSubmit = e => {
    e.preventDefault()
    setPokeSearch(inputSearch.current.value.trim().toLowerCase())


  }

 const pokemonsFilter = pokemons?.results.filter(poke => {
  return poke.name.includes(pokeSearch)
 })


  return (
    <div>
      <header className="header">
         <div className="header-red"><div className="header-black"></div></div>
        <div className="header-img"><img src="logo.png" alt="" /></div>
        </header>

      <section className="form-container">
        <h2 className="form-title">
          <span className="form-nameuser">Welcome {trainer},</span> Her you can find your favorite pokemon
        </h2>
        
        <form className="form-search" onSubmit={handleSubmit}>
          <input className="form-input" ref={inputSearch} type="text" placeholder="search pokemon by name" />
          <button className="form-btn">Search</button>

        <SelectType />
        <ListPokemons
        pokemons = {pokemonsFilter} />
        </form>
        </section>
    </div>
  )
}

export default PokedexPage