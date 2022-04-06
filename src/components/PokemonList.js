import React from 'react'

export const PokemonList = ({pokemons}) => {
    console.log(pokemons);
  return (
    <ul>
   {
    pokemons.map(pokemon=>(
        <li>{pokemon.name}</li>
   ))
   }
    </ul>
  )
}
