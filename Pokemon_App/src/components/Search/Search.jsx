import React from 'react'
import './Search.css';
const Search = () => {
  return (
      <div className='Search-wrapper'>
          <input
              id='pokemon-name-search'
              placeholder='PokemonName...'
              type='text'
          
          />
      </div>
  )
}

export default Search