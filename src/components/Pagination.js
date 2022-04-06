import React from 'react'

export const Pagination = ({pokemonPerPage,totalPokemon,paginate}) => {

    const PageNumbers =[];

    for (let i = 1; i < Math.ceil(totalPokemon / pokemonPerPage); i++) {
        PageNumbers.push(i);
        
    }
    
  return (
    <nav>
    <ul className='pagination'>
        {PageNumbers.map(number =>(
            <li key={number} className="page-item">
                    <a onClick={() => paginate(number*20)} className='page-link'>
                    {number}
                    </a>
                </li>
    ))}
        </ul>    
</nav>
  )
}
