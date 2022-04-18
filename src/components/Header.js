import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
export const Header = () => {
  return (
<nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
  <span class="navbar-text">
    <h1>My Pokedex</h1>
    </span>
    <span class="navbar-text">
    
     <a className='sections'>
        <Link to={`/`} className="sections">
              Home
        </Link>
     </a>
     &nbsp;
     <a className='sections'>
        <Link to={`/wishlist`} className="sections">
              Wishlist
        </Link>
     </a>
    </span>
  </div>
</nav>
  )
}
