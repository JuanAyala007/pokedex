import { useRef } from "react"
import { setTrainer } from "../store/states/trainer.slice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import '../components/styles/FormTrainer.css'


const FormTrainer = () => {

    const trainerInput = useRef()

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
       dispatch(setTrainer(trainerInput.current.value.trim()))
       navigate('/pokedex')

    }
  return (
    <form className="form" onSubmit={handleSubmit}>
        <input className="form-input" ref={trainerInput} type="text" placeholder="your name" />
        <button className="button type1"></button>
    </form>
  )
}

export default FormTrainer