import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './App.css';
import { PokemonList } from './components/PokemonList';
import { Pagination } from './components/Pagination';
function App() {
  
  const [pokemons,setPokemons]  = useState([]);

  const [pokemonslimit,setPokemonslimit]  = useState([]);
  const [pokemonPerPage]  = useState(20);
  const [nextpage,setnextPage]  = useState([]);
   const [prevpage,setprevpage]  = useState();


  useEffect(() => {
    const fetchPokemon = async()=>{
      const result = await axios.get('https://pokeapi.co/api/v2/pokemon/');
      setPokemons(result.data.results);
      setnextPage(result.data.next);
      setprevpage(result.data.previous);
      console.log(result);
      //get the total amount
    setPokemonslimit(result.data.count);
    }
    
    fetchPokemon();
  }, []);

  // function paginate(pageNumber){
  //   axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${pageNumber}}&limit=20`)
  //   .then(function (response) {
  //   // handle success
  //   //console.log(response);
  //   setPokemons(response.data.results);
  //   setnextPage(response.data.next);
  //   setprevpage(response.data.prev);
  // })
  // .catch(function (error) {
  //   // handle error
  // })

  // }

  function paginate(search_url){
    const fetchPokemon = async()=>{
      const result = await axios.get(`${search_url}`);
      setPokemons(result.data.results);
      setnextPage(result.data.next);
      setprevpage(result.data.previous);
    }
    //   axios.get(`${search_url}`)
    //   .then(function (response) {
    //   // handle success
    //   //console.log(response);
    //   setPokemons(response.data.results);
    //   setnextPage(response.data.next);
    //   setprevpage(response.data.prev);
    // })
    // .catch(function (error) {
    //   // handle error
    // })
    console.timeLog();
    fetchPokemon();
  }

  console.log(prevpage);  console.log(nextpage);
  

  let prev;
  let next;

  if (prevpage != null) {
    prev = <button onClick={() => paginate(prevpage)}>Prev Page</button>
  }
  if (nextpage) {
    next = <button onClick={() =>  paginate(nextpage)}>Next Page</button>
  }
  
  console.log(prev);
  //console.log(pokemonslimit);
  return (
    <div className="App">


      <PokemonList pokemons={pokemons} />
      <nav>
        <ul className='pagination'>
          <li>{prev}</li>
          <li>{next}</li>
        </ul>    
    </nav>
      {/* <Pagination pokemonPerPage={pokemonPerPage} nextpage={nextpage} prevpage={prevpage} totalPokemon={pokemonslimit} paginate={paginate}/> */}
    </div>
  );
}


export default App;