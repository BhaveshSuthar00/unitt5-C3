import React, {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import BookCard from '../BookCard/BookCard'
import SortAndFilterButtons from '../SortAndFilterButtons/SortAndFilterButtons'
import styled from 'styled-components'
const Section = () => {
    
const Main = styled.div`
display : grid;
gap : 2%;
grid-template-columns: repeat(4, 1fr);
`
    const [data, setData] = useState([]);
    const {section} = useParams();
    const getData = () =>{
      
          axios.get('http://localhost:8080/books').then((res)=> {
            let dd = section.toLowerCase();
              let datafor = res.data.filter((book)=>{
                let cd = book.section.toLowerCase();
                if(cd === dd){
                    return true;
                } else { 
                    return false;
                }
              })
              setData(datafor)
          })
    } 
    useEffect(()=>{
      getData();
    }, [section])
    const [change, setChange] = useState(false);
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
        <>
        <div style={{ padding : '2% 0 2% 0'}}>
        <SortAndFilterButtons handleSort={handleSort} />
        </div>
        <div style={{ textAlign : 'center', fontWeight : 'bolder', padding : '1% 0 2% 0' }}>Section {section}</div>
        <Main className='sectionContainer'>
            {data.map(({title,price,imageUrl, id}) => {
                return <BookCard key={id} title={title} imageUrl={imageUrl} price={price} id={id} />
            })}
        </Main>
        </>
    )
}

export default Section
