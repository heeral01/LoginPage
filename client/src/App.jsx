import React from 'react'
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';
import Login from './page/Login';
import Register from './page/Register';
import Header from './page/Header';
import Navbar from './component/Navbar';

function App() {
   
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Header/>} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
    
    </BrowserRouter>
  )
}

export default App