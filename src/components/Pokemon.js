import React,{useState,useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { Header } from './Header';
function Pokemon () {
  const location = useLocation();
  const { name } = location.state
  const { search_url } = location.state
  const {type} = '';

  const [collectionpokemons,setnextcollectionpokemons]  = useState([]);
  const [prevcollection,setprevcollection]  = useState([]);
  const [selectedpokemon,setselectedpokemon] = useState();
  const [selectedpokemonimg,setselectedpokemonimg] = useState();
  const [selectedpokemonstats,setselectedpokemostats] = useState();

  const [hpstat,setselectedpokemohpstats] = useState();
  const [attackstats,setpokemonattackstats] = useState();
  const [defencestats,setpokemondefencestats] = useState();
  const [sAttacktats,setsAttacktats] = useState();
  const [sDefencestats,setsDefencestats] = useState();
  const [speedstats,setselectedpokemonspeedstats] = useState();


  useEffect(()=>{
    setprevcollection(JSON.parse(localStorage.getItem('collection')));
  },[])

  useEffect(() => {
    const fetchPokemon = async()=>{
      const result = await axios.get(`${search_url}`);
      setselectedpokemon(result.data);
      setselectedpokemonimg(result.data.sprites.front_default);
      setselectedpokemohpstats(result.data.stats[0].base_stat);
      setpokemonattackstats(result.data.stats[1].base_stat);
      setpokemondefencestats(result.data.stats[2].base_stat);  
      setsAttacktats(result.data.stats[3].base_stat);
      setsDefencestats(result.data.stats[4].base_stat);
      setselectedpokemonspeedstats(result.data.stats[5].base_stat);
     // setselectedpokemostats(result.data.stats);
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
    margin: '10% auto'
  }

  const styleObj2 = {
  float: 'left'
    }
    //console.log(selectedpokemon);
     //console.log(selectedpokemonimg);
    //  console.log(selectedpokemonstats);
    //  console.log(hpstat);
    //  console.log(attackstats);
    //  console.log(defencestats);
    //  console.log(sAttacktats);
    //  console.log(sDefencestats);
    //  console.log(speedstats);



  return (

<>  
<Header/>
    <div className='App'>
    <div className="card" style={styleObj}>
      <img className="card-img-top" src={selectedpokemonimg} alt="Card image cap"/>
      <div className="card-body">
        <h5 className="card-title text-center">{name}</h5>

        {/* <h5 className="card-title">{selectedpokemon.types[0].name}</h5> */}
        <p className="card-text">
          <ul style={styleObj2}>
          <li>
             HP &nbsp;:{hpstat}
            </li>
            <li>
            Att &nbsp;: {attackstats}
            </li>
             <li>
              Def: {defencestats}
            </li>
            <li>
           Specail Att &nbsp;:  {sAttacktats}
            </li>
            <li>
            Special Def&nbsp;: {sDefencestats}
            </li>
            <li>
            Speed &nbsp;: {speedstats}
            </li> 
          </ul>  
        </p>
        <button type="button" class="btn btn-primary" onClick={addToCollection}>Add To Wishlist Collection</button>
      </div>
    </div>

    </div>
     

    </>

  )
}


export default Pokemon;