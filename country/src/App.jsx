import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import "./assets/style.css"
import Content from './Content';
import Country from './Country';
import Home from './Home';

function App() {
 


  return (
   <Routes>
    <Route path='/' element={<Content/>}/>
    <Route path='/:id' element={<Country/>}/>
    <Route path='/home' element={<Home/>}/>
   </Routes>
  )
}

export default App