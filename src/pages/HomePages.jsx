import FormTrainer from "../HomePages/FormTrainer"
import '../components/styles/homePage.css'

const HomePages = () => {
  return (
    <article className="home">
        <header className="home-logo"><img className="logo-img" src="logo.png" alt="" /></header>
        <h2 className="home-title">¡Welcome Trainer!</h2>
        <p className="title-phrase">Para comenzar dame tu nombre!</p>
        <FormTrainer  />

        <footer className="footer-red">
        <div className="footer-black"></div>
        <div className="circle"></div>
        </footer>

    </article>
  
  )
}

export default HomePages