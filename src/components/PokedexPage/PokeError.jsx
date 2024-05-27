import React from 'react'
import './styles/PokeError.css'

const PokeError = () => {
  return (
    <div>
      <h2 className='err__message'>There are no pokemon that meet the filters</h2>
      <img src="images/404error.png" alt="" />
    </div>
  )
}

export default PokeError