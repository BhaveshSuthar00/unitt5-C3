import React from 'react'
import './home.css'
import BookCard from '../BookCard/BookCard'
const Home = () => {
  return (
    <div className='homeContainer'>
      <h2 style={{ textAlign: "center" }}>Home</h2>
      <div className='sorting' >
        <p>Sort by name</p>
        <p>Sort low to high</p>
        <p>Sort high to low</p>
        <p></p>
      </div>
      <div className="mainContainer">
        <BookCard />
      </div>
    </div>
  )
}

export default Home