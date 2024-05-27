import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import './styles/PokeInfoPage.css'

const PokeInfoPage = () => {

  const { name } = useParams()

  const [pokemon, getPokemon] = useFetch()

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`
    getPokemon(url)
  }, [name])

  console.log(pokemon)

  return (
    <article>
      <header>
        <img className='poke__logo' src="images/logo_pokedex.png" alt="logo pokedex"/>
      </header>
      <p className='line__black'>p</p>
      <section className='stats__container'>
        <div className={`stats__img bg__${pokemon?.types[0].type.name}`}>
          <img className='image__poke' src={pokemon?.sprites.other["official-artwork"].front_default} alt="" />
        </div>
        <h2 className='stats__name_poke'>{pokemon?.name}</h2>
        <ul className='stats__types_abilities'>
          <li className='stats__weight'><span>Weight</span><span>{pokemon?.weight}</span></li>
          <li className='stats__height'><span>Height</span><span>{pokemon?.height}</span></li>
        </ul>
        <hr />
        <div className='stats__abilities__and__types'>
          <div className='stats__types'>
            <h3>Types</h3>
            <ul>
              {
                pokemon?.types.map(typeInfo => (
                  <li key={typeInfo.type.url} className={`type-${typeInfo.type.name.toLowerCase()}`}>{typeInfo.type.name}</li>
                ))
              }
            </ul>
          </div>
          <div className='stats__abilities'>
            <h3>Abilities</h3>
            <ul>
              {
                pokemon?.abilities.map(abilities => (
                  <li key={abilities.ability.url}>{abilities.ability.name}</li>
                ))
              }
            </ul>
          </div>
        </div>
        <hr />
        <div className='card__stats'>
          <h2 className='card__stats-title'>Stats:</h2>
          <ul className='card__stats-list'>
            {
              pokemon?.stats.map(statInfo => (
                <li key={statInfo.stat.name}>
                  <span className='card__stats-name'>{statInfo.stat.name}</span>
                  {/* <span className='card__stats-values'>{statInfo.base_stat}</span> */}
                  <div className={`stat-bar`}>
                    <div className={`stat-value bg__${pokemon?.types[0].type.name}`} style={{ width: `${(statInfo.base_stat / 255) * 100}%` }}>
                      {statInfo.base_stat}
                    </div>
                  </div>
                </li>
              ))
            }
          </ul>
        </div>
      </section>
      <section className='card__movents'>
        <h2 className='card__movents-title'>Movements</h2>
        <ul className='card__items'>
          {
            pokemon?.moves.map(moveInfo => (
              <li className='card__poke__movent'>{moveInfo.move.name}</li>
            ))
          }
        </ul>
      </section>


    </article>
  )
}

export default PokeInfoPage