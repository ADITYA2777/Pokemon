import React from 'react'
import Search from '../Search/Search'
import PokemonList from '../PokemonList/PokemonList';
import './Pokdex.css';
const Pokedex = () => {
  return (
    <div className='pokdex-wrapper'>
      <h1 id='heading-pokemon'>Pokdex</h1>
      <Search />
      <PokemonList/>
    </div>
  )
}

export default Pokedex