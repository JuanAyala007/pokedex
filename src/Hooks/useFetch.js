import axios from "axios"
import { useState } from "react"


const useFetch = url => {
  const [response, setResponse] = useState()

  const getApi = () => {
    axios.get(url)
    .then(res => setResponse(res.data))
    .catch(err => console.log(err))
  }

  const getapiTypes = (urlType) => {
    axios.get(urlType)
    .then(res => {
      const obj = {
        results: res.data.pokemon.map(poke => poke.pokemon)
      }
      setResponse()
    })
  }
    return [response, getApi]
}

export default useFetch