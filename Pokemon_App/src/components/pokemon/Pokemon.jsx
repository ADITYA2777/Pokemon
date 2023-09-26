

import React from 'react'
import "./pokemonnn.css"
import { Link } from 'react-router-dom'
const Pokemon = ({name,image,id}) => {
  return (
    <div className="pokemon">
      <Link to={`/pokemon/${id}`}>
        <div className="pokemonname">{name}</div>
        <div>
          <img className="pokemon-img" src={IMG_URl} />
        </div>
      </Link>
    </div>
  );
}

export default Pokemon