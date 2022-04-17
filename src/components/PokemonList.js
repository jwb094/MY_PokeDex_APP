import React from 'react'
import Pokemon from './Pokemon';
import { Routes, Route, Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
export const PokemonList = ({pokemons}) => {
    //console.log(pokemons);
  return (
        <div className="col-md-12">
          <ul>
                {
                  pokemons.map(pokemon=>(
                    <li key={uuidv4()} id={uuidv4()}>
                    {/* <Link to={`/pokemon/${pokemon.name}`} element={<Pokemon pokemon={pokemon.name}/>}> */}
                    <Link to={`/pokemon/${pokemon.name}`} state={{ name: pokemon.name ,search_url: pokemon.url }}>
                    {pokemon.name}
                    </Link>
                  </li>
                ))
                }
          </ul>
        </div>

  )
}
