import React,{useState,useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios'
function Pokemon () {
  const location = useLocation();
  const { name } = location.state
  const { search_url } = location.state
  const {type} = '';
  // console.log(from);
   console.log(search_url);
  const [collectionpokemons,setnextcollectionpokemons]  = useState([]);
  const [prevcollection,setprevcollection]  = useState([]);
  const [selectedpokemon,setselectedpokemon] = useState();
  const [selectedpokemonimg,setselectedpokemonimg] = useState();
  const [selectedpokemonstats,setselectedpokemostats] = useState();


  useEffect(()=>{
      (JSON.parse(localStorage.getItem('collection')));
  },[])

  useEffect(() => {
    const fetchPokemon = async()=>{
      const result = await axios.get(`${search_url}`);
      setselectedpokemon(result.data);
      setselectedpokemonimg(result.data.sprites.front_default);
      setselectedpokemostats(result.data.stats);
    }

    fetchPokemon();
  },[]);


  function addToCollection(){

    alert(name);
    let list = [...prevcollection]
   // console.log('before'+list);
    list.push(name);
    //console.log(list);
    setprevcollection(list);
    //console.log(list);
    localStorage.setItem('collection',JSON.stringify(list));
    //console.log(localStorage);
  }

  const styleObj = {
    width: '18rem', 
  }
    console.log(selectedpokemon);
     console.log(selectedpokemonimg);
     console.log(selectedpokemonstats);

  return (

<>
    <div className='App'>
    <div className="card" style={styleObj}>
      <img className="card-img-top" src={selectedpokemonimg} alt="Card image cap"/>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          <ul>
          </ul>  
        </p>
      <button onClick={addToCollection}>Add To Collection</button>
      </div>
    </div>

    </div>
     

    </>

  )
}


export default Pokemon;