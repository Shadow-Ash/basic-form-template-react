import React, { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { FormDiv } from './form-page'
import Signin from './signin'

function App() {

  return (
    
    <>
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<FormDiv />} />
      <Route path="/signin" element={<Signin />} />
    
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
