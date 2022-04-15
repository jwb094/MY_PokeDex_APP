import React,{useState,useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios'
function Pokemon () {
  const location = useLocation();
  const { name } = location.state
  const { search_url } = location.state
  // console.log(from);
   console.log(search_url);
  const [collectionpokemons,setnextcollectionpokemons]  = useState([]);
  const [prevcollection,setprevcollection]  = useState([]);
  const [selectedpokemon,setselectedpokemon] = useState();
  const [selectedpokemonimg,setselectedpokemonimg] = useState();
  const [selectedpokemonstats,setselectedpokemostats] = useState();


  useEffect(()=>{

      (JSON.parse(localStorage.getItem('collection')));
    //console.log(collection);
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
    console.log('before'+list);
    list.push(name);
    console.log(list);
    setprevcollection(list);
    console.log(list);
    localStorage.setItem('collection',JSON.stringify(list));
    console.log(localStorage);
  }

  const styleObj = {
    width: '18rem', 
  }
    console.log(selectedpokemon);
     //console.log(selectedpokemonimg);
     console.log(selectedpokemonstats);
    // if (selectedpokemon.types[0]) {
    //    = <p className="card-text"> <h6><span className="badge bg-success">{selectedpokemon.types[0].type.name}</span></h6></p>;
    // } 
  return (

<>
    <div className='App'>
    <div className="card" style={styleObj}>
      <img className="card-img-top" src={selectedpokemonimg} alt="Card image cap"/>
      <div className="card-body">
    <div className='row'>
      <div className='col-md-6'>      

        </div>
      <div className='col-md-6'>      
       
        </div>


    </div>
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          <ul>
                {/* <li> {selectedpokemonstats[0].stat.name} : {selectedpokemonstats[0].base_stat}  </li>
                <li> {selectedpokemonstats[1].stat.name} : {selectedpokemonstats[1].base_stat}  </li>
                <li> {selectedpokemonstats[2].stat.name} : {selectedpokemonstats[2].base_stat}  </li>
                <li> {selectedpokemonstats[3].stat.name} : {selectedpokemonstats[3].base_stat}  </li>
                <li> {selectedpokemonstats[4].stat.name} : {selectedpokemonstats[4].base_stat}  </li>
                <li> {selectedpokemonstats[5].stat.name} : {selectedpokemonstats[5].base_stat}  </li> */}
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