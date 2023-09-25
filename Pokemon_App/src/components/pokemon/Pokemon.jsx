

import React from 'react'
import "./pokemonnn.css"
const Pokemon = ({name,image}) => {
  return (
      <div className='pokemon'>
          <div className='pokemonname'>{ name}</div>
          <div><img className='pokemon-img' src={image} /></div>
    </div>
  )
}

export default Pokemon