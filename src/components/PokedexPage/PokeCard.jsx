import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import { useNavigate } from 'react-router-dom'
import './styles/PokeCard.css'

const PokeCard = ({ poke }) => {

  const [ pokemon, getPokemon ] = useFetch()

  useEffect(() => {
    getPokemon(poke.url)
  }, [])

  const navigate = useNavigate()

  const handleNavDetail = () => {
    navigate(`/pokemon/${pokemon.name}`)
  }

  return (
    <article className={`poke border__${pokemon?.types[0].type.name}`} onClick={handleNavDetail}>
      <header className={`poke__header bg__${pokemon?.types[0].type.name}`}>
        <img className='poke__sprite' src={pokemon?.sprites.other["official-artwork"].front_default} alt={poke.name} />
      </header>
      <section className={`poke__body`}>
        <h3 className={`poke__name text__${pokemon?.types[0].type.name}`}>{pokemon?.name}</h3>
        <ul className='poke__types'>
          {
            pokemon?.types.map(typeInfo => (
              <li className='poke__types__item' key={typeInfo.type.url}>{typeInfo.type.name}</li>))
          }
        </ul>
        <hr className='poke__hr'/>
        <ul className='poke__stats'>
          {
            pokemon?.stats.map(statInfo => (
              <li className='poke__stats__item' key={statInfo.stat.url}>
                <span className='poke__stats__label'>{statInfo.stat.name}</span>
                <span className={`poke__stats__value text__${pokemon?.types[0].type.name}`}>{statInfo.base_stat}</span>
              </li>
            ))
          }
        </ul>
      </section>
    </article>
  )
}

export default PokeCard