import React from 'react'
import Calender from './components/Calender'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Notes from './Pages/notes'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Calender />
        <Routes>
      
          <Route path="/note/:Date" element={<Notes /> }></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App