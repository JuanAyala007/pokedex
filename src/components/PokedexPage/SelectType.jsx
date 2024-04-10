import { useEffect } from "react"
import useFetch from "../../Hooks/useFetch"
import '../styles/formselect.css'


const SelectType = () => {

    const url = 'https://pokeapi.co/api/v2/type'
    const [types, getTypes] = useFetch(url)

    useEffect(() => {
        getTypes()

    
    
    }, [])
   
    const handleChange = (e) => {
        console.log(e.target.value)

    }
    



  return (
    <select className="form-selecttype" onChange={handleChange}>
        <option value={"allpokemons"}>All pokemons</option>
        {
            types?.results.map(typeinfo => (
                <option key={typeinfo.url} value={typeinfo.url}>{typeinfo.name}</option>
            ))
        }
        
    </select>
  )
}

export default SelectType