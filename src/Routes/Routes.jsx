import React from 'react'
import Home from '../Components/Home/Home'
import Navbar from '../Components/Navbar/Navbar'
import{Routes, Route} from 'react-router-dom'
const AllRoutes = () => {
  return (
    <>
    <Navbar />
    <Routes>
        <Route path='/' element ={<Home />} />
    </Routes>
    </>
  )
}

export default AllRoutes