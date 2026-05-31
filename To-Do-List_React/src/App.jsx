import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header.jsx'
import HomePage from './pages/HomePage'
import { tasks } from './data'
import CreateTaskform from './components/CreateTaskform'
import EditForm from './components/EditForm.jsx'

const App = () => {
  return (
    
    
    <BrowserRouter>

     <Header />
       <Routes>
        <Route path='/' element={<HomePage data={tasks} />}></Route>
        <Route path='/create' element={<CreateTaskform />}></Route>
        <Route path='/edit/:ID' element={<EditForm />}></Route>
       </Routes>
    </BrowserRouter>
    
  )
}

export default App