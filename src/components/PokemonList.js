import React from 'react'
import Pokemon from './Pokemon';
import { Routes, Route, Link } from "react-router-dom";
export const PokemonList = ({pokemons}) => {
    //console.log(pokemons);
  return (
    <ul>
   {
    pokemons.map(pokemon=>(
      <li key={pokemon.name}>
      {/* <Link to={`/pokemon/${pokemon.name}`} element={<Pokemon pokemon={pokemon.name}/>}> */}
      <Link 
      to={{ pathname: `/pokemon/${pokemon.name}`, query: { pokemon: pokemon.name }}}  element={<Pokemon pokemon={pokemon.name} />}>
      {pokemon.name}
      </Link>
    </li>
   ))
   }
    </ul>
  )
}
