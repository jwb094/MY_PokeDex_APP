import React,{useState,useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios'
function Pokemon () {
  const location = useLocation();
  const { name } = location.state
  const { search_url } = location.state
  // console.log(from);
  // console.log(hello);
  const [selectedpokemon,setselectedpokemon] = useState();
  const [selectedpokemonimg,setselectedpokemonimg] = useState();
  const [selectedpokemonstats,setselectedpokemostats] = useState();


  useEffect(() => {
    const fetchPokemon = async()=>{
      const result = await axios.get(`${search_url}`);
      console.log(result.data.sprites);
      setselectedpokemon(result.data);
      setselectedpokemonimg(result.data.sprites.front_default);
      setselectedpokemostats(result.data.stats);
      
 
    }

    fetchPokemon();
  },[]);
  

  const styleObj = {
    width: '18rem',
    
}
   // console.log(selectedpokemon);
     //console.log(selectedpokemonimg);
     //console.log(selectedpokemonstats);

  return (

<>
    <div className='App'>
    <div className="card" style={styleObj}>
      <img className="card-img-top" src={selectedpokemonimg} alt="Card image cap"/>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>

    </div>
     

    </>

  )
}


export default Pokemon;