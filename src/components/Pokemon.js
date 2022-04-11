import React,{useState,useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios'
function Pokemon () {
  const location = useLocation();
  const { name } = location.state
  const { search_url } = location.state
  // console.log(from);
  // console.log(hello);
  const [selectedpokemon,setselectedpokemon] = useState([]);

  useEffect(()=>{
    const fetchPokemon = async()=>{
    const result = await axios.get(`${search_url}`);
    //setPokemons(result.data.results);
    // console.log(result);
    //get the total amount
    setselectedpokemon(result.data);
    }
   
    fetchPokemon();
    },[]);

    console.log(selectedpokemon);

  return (
  <h1></h1>
  )
}


export default Pokemon;