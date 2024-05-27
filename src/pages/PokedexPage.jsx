import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import useFetch from '../hooks/useFetch'
import PokeCard from '../components/PokedexPage/PokeCard'
import SelectType from '../components/PokedexPage/SelectType'
import './styles/PokedexPage.css'

const PokedexPage = () => {

  const [searchedName, setSearchedName] = useState('')
  const [typeSelected, setTypeSelected] = useState('allPokemons')

  console.log(typeSelected)

  const trainer = useSelector(state => state.trainer)

  const [ pokemons, getPokemons, getTypePokemon ] = useFetch()

  useEffect(() => {
    if(typeSelected === 'allPokemons') {
      // Hacemos una peticion de todos lo elementos
      const url = 'https://pokeapi.co/api/v2/pokemon?limit=30&offset=0'
      getPokemons(url)
    } else {
      // Hacemos la peticion de todos los tipos de pokemon
      getTypePokemon(typeSelected)
    }
  }, [typeSelected])

  const inputName = useRef()

  const handleSearch = e => {
    e.preventDefault()
    setSearchedName(inputName.current.value.trim().toLowerCase())
  }

  const callbackFilter = poke => {
    const filterName = poke.name.includes(searchedName)
    return filterName
  }

  return (
    <div className='poke__container'>
      <header>
        <img className='poke__logo' src="images/logo_pokedex.png" alt="logo pokedex"/>
      </header>
      <p className='line__black'>p</p>
      <p className='poke__welcome'>Welcome <span className='poke__name-trainer'>{trainer}</span>, here you will find your favorite pokemon</p>
      <div className='poke__form__selector'>
        <form className='poke__form' onSubmit={handleSearch}>
          <input ref={inputName} type="text" />
          <button className='poke__btn'>Search</button>
        </form>
        <div className='poke__selector'>
          <SelectType setTypeSelected={setTypeSelected}/>
        </div>
      </div>
      <div className='poke__cards'>
        {
          pokemons && pokemons.results.filter(callbackFilter).length === 0
            ? <h2 className='poke__error'>There are no pokemon that meet the filters</h2>
            : (
              pokemons?.results.filter(callbackFilter).map(poke => (
                <PokeCard
                  key={poke.url}
                  poke={poke}
                />
                ))
              )
        }
      </div>
    </div>
  )
}

export default PokedexPage