import React, { useRef } from 'react'
import { setTrainer } from '../store/slices/trainer.slice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './styles/HomePage.css'

const HomePage = () => {
  
  const inputTrainer = useRef()

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(setTrainer(inputTrainer.current.value.trim()))
    navigate('/pokedex')
  }
  
  return (
    <div className='home'>
      <img className='home__logo' src="images/logo_pokedex.png" alt="logo pokedex" />
      <h2 className='home__welcome'>Hi trainer!</h2>
      <p className='home__message'>If you want to find you favorite pokemon please give me your trainer name</p>
      <form className='home__form' onSubmit={handleSubmit}>
        <input ref={inputTrainer} type="text"/>
        <button className='home__btn'>Catch them all</button>
      </form>
      <div className="home__line-container">
        <div className="home__line"></div>
        <div className="home__ball"></div>
      </div>
    </div>
  )
}

export default HomePage