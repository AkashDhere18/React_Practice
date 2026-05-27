import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from './components/Navbar'
import Products from './pages/Products'
import Recipies from './pages/Recipies';

const App = () => {
  return (
    <BrowserRouter >
     <Navbar />
     <Routes>
       <Route path='/products' element={<Products />}></Route>
       <Route path='/recepie' element={<Recipies />}></Route>
     </Routes>
    </BrowserRouter>
  )
}

export default App