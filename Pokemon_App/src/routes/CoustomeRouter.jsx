
import React from 'react'
import { Routes,Route } from 'react-router-dom';
import Pokedex from '../components/Pokdex/Pokedex';
import PokemonDeta from '../components/PokemonDetalis/PokemonDeta';

const CoustomeRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Pokedex/>} />  
            <Route path='/pokemon/:id' element={<PokemonDeta/> } />
      </Routes>
  )
}

export default CoustomeRouter