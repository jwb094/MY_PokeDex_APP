import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './App.css';
import { PokemonList } from './components/PokemonList';
import { Pagination } from './components/Pagination';
function App() {
  
  const [pokemons,setPokemons]  = useState([]);

  const [pokemonslimit,setPokemonslimit]  = useState([]);
  const [pokemonPerPage]  = useState(20);
  const [currentpage,setCurrentPage]  = useState([]);
  // const [prevpage,setprevpage]  = useState();


  useEffect(() => {
    const fetchPokemon = async()=>{
      const result = await axios.get('https://pokeapi.co/api/v2/pokemon/');
      setPokemons(result.data.results);
     // console.log(result);
      //get the total amount
    setPokemonslimit(result.data.count);
    }
    
    fetchPokemon();
  }, []);

  function paginate(pageNumber){
    axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${pageNumber}}&limit=20`)
    .then(function (response) {
    // handle success
    //console.log(response);
    setPokemons(response.data.results);
  })
  .catch(function (error) {
    // handle error
  })

  }
 


  
  //console.log(pokemons);
  //console.log(pokemonslimit);
  return (
    <div className="App">
   
Learn sd
      <PokemonList pokemons={pokemons} />
      <Pagination pokemonPerPage={pokemonPerPage} totalPokemon={pokemonslimit} paginate={paginate}/>
    </div>
  );
}


export default App;