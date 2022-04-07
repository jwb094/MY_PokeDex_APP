import React from 'react'
import { useParams } from 'react-router';
export default function Pokemon(props) {
    const { name } = useParams();
    //console.log(name);
    //console.log(this.props.pokemon);
  //  const test = props.pokemon;
  return (
    <div>Pokemon {name}</div>
  )
}
