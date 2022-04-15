import React from 'react'

export const Pagination = ({pokemonPerPage,nextpage,prevpage,totalPokemon,paginate}) => {

    const PageNumbers =[];

    for (let i = 1; i < Math.ceil(totalPokemon / pokemonPerPage); i++) {
        PageNumbers.push(i);
        
    }

    let prev,next;

    // if (prevpage != null) {
    //   prev = <button onClick={() => paginate(prevpage)}>Prev Page</button>
    // }
    // if (nextpage) {
    //   next = <button onClick={() =>  paginate(nextpage)}>Next Page</button>
    // }
  return (
    <nav>
        <ul className='pagination'>
          <li>{prev}</li>
          <li>{next}</li>
        </ul>    
    </nav>
  )
}
