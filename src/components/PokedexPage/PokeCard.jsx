import { useEffect } from "react"
import useFetch from "../../Hooks/useFetch"
import { useNavigate } from "react-router-dom"
import '../styles/pokeCard.css'


const PokeCard = ({pokeInfo}) => {

   const [pokemon, getPokemon] = useFetch(pokeInfo.url)

   useEffect(() => {
    getPokemon()
   }, [])

   const navigate = useNavigate()

   const handlePokeDetail = () => {
    navigate(`/pokedex/${pokeInfo.name}`)
   }


  return (

    <div className="card-container-results">
      
    <article className="card" onClick={handlePokeDetail}>
      <header className={`card-header color-${pokemon?.types[0].type.name}`}>
        <img className="card-img" src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
      </header>

      <section className="card-principal">
        <h3 className={`card-name color-${pokemon?.types[0].type}`}>{pokemon?.name}</h3>
        <ul className="card-types">
          {
            pokemon?.types.map(typeInfo => (
              <li className="card-type" key={typeInfo.type.url}>{typeInfo.type.name}</li>
            ))
          }
        </ul>
      </section>

      <hr className="card-hr" />

      <section className="card-stats">
        <ul className="card-list">
          {
            pokemon?.stats.map(statInfo => (
              <li className="card-stats-list" key={statInfo.stat.url}>
                <span className="card-stats-label">{statInfo.stat.name}</span>
                <span className="card-stats-value">{statInfo.base_stat}</span>
                
              </li>
            ))
          }
        </ul>
      </section>
    </article>
    </div>


  )
}

export default PokeCard