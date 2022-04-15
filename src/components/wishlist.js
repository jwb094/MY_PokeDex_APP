import React,{useState,useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';

function Wishlist () {
    const [list,setlist]  = useState([]);
    useEffect(()=>{

        setlist(JSON.parse(localStorage.getItem('collection')));
 
    },[])
    console.log(list);
  return (
    <div>
    <ul>
   {
    list.map(pokemon=>(
      <li key={uuidv4()} id={uuidv4()}>
      {/* <Link to={`/pokemon/${pokemon.name}`} element={<Pokemon pokemon={pokemon.name}/>}> */}
    
      {pokemon}

    </li>
   ))
   }
    </ul>
    </div>
  )
}

export default Wishlist;