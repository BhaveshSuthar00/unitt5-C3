import React, {useState,useEffect} from 'react'
import SortAndFilterButtons from '../SortAndFilterButtons/SortAndFilterButtons'
import axios from 'axios'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import BookCard from '../BookCard/BookCard'
const Home = () => {
  

const Main = styled.div`
    display : grid;
    gap : 2%;
    grid-template-columns: repeat(4, 1fr);
`

  const [data, setData] = useState([]);
  const getData = () => {
    axios.get('http://localhost:8080/books').then((response) => {
      setData(response.data);
    }).catch((err) => {
      console.log(err);
    })
  }
  const [change, setChange] = useState(false);
  useEffect(()=>{
    getData();
  }, [])
  const handleSort = (sort, value) =>{
    if(sort === 'asc' && value==='title'){
      data.sort((a,b)=> {
        if(a.title>b.title){
          return 1;
        } else {
          return -1;
        }
      })
      setChange(!change)
    }
    if(sort === 'desc' && value==='title'){
      data.sort((a,b)=> {
        if(a.title<b.title){
          return 1;
        } else {
          return -1;
        }
      })
      setChange(!change)

    }
    if(sort === 'asc' && value==='price'){
      data.sort((a,b)=> a.price-b.price)
      setChange(!change)
    }
    if(sort === 'desc' && value==='price'){
      data.sort((a,b)=> b.price-a.price)
      setChange(!change)

    }
  }
  useEffect(()=>{}, [change])
  return (
    <div className='homeContainer'>
      <h2 style={{ textAlign: "center" }}>Home</h2>
      <SortAndFilterButtons handleSort={handleSort}/>
      <Main className="mainContainer" >
        {data.map(({title,imageUrl,price,id})=>{
          return <BookCard key={id} title={title} imageUrl={imageUrl} price={price} id={id} />
        })}
      </Main>
    </div>
  )
}

export default Home