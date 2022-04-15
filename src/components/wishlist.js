import React,{useState,useEffect} from 'react';


function Wishlist () {
    const [list,setlist]  = useState([]);
    useEffect(()=>{

        setlist(JSON.parse(localStorage.getItem('collection')));
 
    },[])
    console.log(list);
  return (
    <div>wishlist</div>
  )
}

export default Wishlist;