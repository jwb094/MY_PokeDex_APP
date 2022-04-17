import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './App.css';
import { PokemonList } from './components/PokemonList';
import { Pagination } from './components/Pagination';
import { Header } from './components/Header';
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
      //console.log(result);
      //get the total amount
    setPokemonslimit(result.data.count);
    }
    
    fetchPokemon();
  }, []);

  function paginate(search_url){
    const fetchPokemon = async()=>{
      const result = await axios.get(`${search_url}`);
      setPokemons(result.data.results);
      setnextPage(result.data.next);
      setprevpage(result.data.previous);
    }

    
    fetchPokemon();
  }



  let prev;
  let next;

  if (prevpage != null) {
    prev = <li class="page-item col-md-2  col-xs-12">
                <a class="page-link" onClick={() =>  paginate(prevpage)}>Previous</a>
            </li>
  
  }
  if (nextpage) {
    next =  <li class="page-item col-md-2 col-xs-12">
              <a class="page-link" onClick={() =>  paginate(nextpage)}>Next</a>
            </li>

  }
  
  
  //console.log(pokemonslimit);
  return (
    <div className="App">
      <Header/>
      <PokemonList pokemons={pokemons} />
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center row">
          {prev}
          {next}
        </ul>
      </nav>
    </div>
  );
}


export default App;