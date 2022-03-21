import React, {useState,useEffect} from 'react'
import './home.css'
import axios from 'axios'
import BookCard from '../BookCard/BookCard'
const Home = () => {
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
        if(a.title<b.title){
          return -1;
        } else {
          return 1;
        }
      })
      setChange(!change)
    }
    if(sort === 'desc' && value==='title'){
      data.sort((a,b)=> {
        if(a.title>b.title){
          return -1;
        } else {
          return 1;
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
      <div className='sorting' >
        <button onClick={()=> {handleSort('asc', 'title')}}>Sort by title Asc</button>
        <button onClick={()=> {handleSort('desc', 'title')}}>Sort by title Desc</button>
        <button onClick={()=> {handleSort('asc', 'price')}}>Sort price Asc</button>
        <button onClick={()=> {handleSort('desc', 'price')}}>Sort price Desc</button>
      </div>
      <div className="mainContainer" >
        {data.map(({title,imageUrl,price,id})=>{
          return <BookCard key={id} title={title} imageUrl={imageUrl} price={price} id={id} />
        })}
      </div>
    </div>
  )
}

export default Home