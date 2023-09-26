import { useEffect, useState } from "react";
import axios from "axios";
import './Pokemon.css'
import { POKEMON_URL } from "../../../../constant/constant";
import Pokemon from "../pokemon/Pokemon";

function PokemonList() {

    const [pokeList, setpokeList] = useState([])
    const [IsLoading, setIsLoading] = useState(true)
    
    const [Pokemon_url, setpokemon_url] = useState(POKEMON_URL);
    const [nextUrl, setnextUrl] = useState('');
    const [prevtUrl, setprevUrl] = useState('');
  async function downloadPokemon() {
    //  setIsLoading(true)
      const response = await axios.get(Pokemon_url); // this download url api of pokemon 
      const pokemonResults = response.data.results; // we get array of pokemon from results
     
      setnextUrl(response?.data?.next);
      setprevUrl(response?.data?.previous);
      //iterating  over array of pokemon ,using there url ,to create  an array of  promises
      //that will download thoses 20 pokemon
      const pokemonResultsPromise =
          pokemonResults.map((p) => axios.get(p.url));
      
      // passing  the promises array using of axios.all
      const promiseDta = await axios.all(pokemonResultsPromise)
      console.log(promiseDta);
     // now iterating on the data of each of pokemon , extract name ,id ,type ,image 
      const res = promiseDta.map((pokedata) => {
          const pokemon = pokedata.data;
          return {
              id: pokemon.id,
            name: pokemon.name,
            image:  IMG_URl  || (pokemon?.sprites?.other)
              ? pokemon?.sprites?.other?.dream_world?.front_default
                  : pokemon?.sprites?.front_shiny,
            types:pokemon?.types
          };
      })
      console.log(res);
      setpokeList(res)
      setIsLoading(false)
  }

  useEffect(() => {
    downloadPokemon();
  }, [Pokemon_url]);

    return (
      <div className="pokemon-list-wrapped">
        <div className="pokemon-wrraped">
          {IsLoading
            ? " Loading...."
            : pokeList.map((c) => (
                <Pokemon name={c.name} image={c.image} key={c.id} id={c.id} />
              ))}
        </div>

        <div className="control">
          <button
            disabled={prevtUrl == null}
            onClick={()=> setpokemon_url(prevtUrl)}
          >
            Prev
          </button>
          <button
            disabled={nextUrl == null}
            onClick={()=> setpokemon_url(nextUrl)}
          >
            Next
          </button>
        </div>
      </div>
    );
}

export default PokemonList;
