import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router';
export default function Pokemon({query}) {
    console.log(query);
  
   const { name } = useParams();
   const [selectedPokemon,setselectedPokemon] = useState();

    //console.log(name);

    
    // useEffect(()=>{

    // },[])
    //console.log(this.props.pokemon);
  //  const test = props.pokemon;
  return (
    <div>Pokemon {name}</div>
  )
}
