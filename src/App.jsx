import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './Layout'

function App() {

  return (
    <>
       <Router>
          <Routes>
              <Route element={<Layout/>}>
                 <Route path='/' element={<Home/>}></Route>
              </Route>
          </Routes>
       </Router>
    </>
  )
}

export default App
