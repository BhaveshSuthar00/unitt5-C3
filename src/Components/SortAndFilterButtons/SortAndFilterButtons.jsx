import React from 'react'
import styled from 'styled-components'
const SortAndFilterButtons = ({handleSort}) => {
  const SortBottonDD = styled.div`
    display : flex;
    justify-content: space-evenly;
    width: 100%;
`
  return (
    <SortBottonDD className='sortButtons'>
        <button className='sortByTitleAsc' onClick={()=> {handleSort('asc', 'title')}}>Sort by title Asc</button>
        <button className='sortByTitleDesc' onClick={()=> {handleSort('desc', 'title')}}>Sort by title Desc</button>
        <button className='sortByPriceAsc' onClick={()=> {handleSort('asc', 'price')}}>Sort price Asc</button>
        <button className='sortByPriceDesc' onClick={()=> {handleSort('desc', 'price')}}>Sort price Desc</button>
    </SortBottonDD>
  )
}

export default SortAndFilterButtons