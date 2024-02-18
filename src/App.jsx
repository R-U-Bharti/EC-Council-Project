import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Pages/Navbar'
import HomeIndex from './Components/Pages/Home/HomeIndex'

const App = () => {
  return (
    <>

      <Navbar />

      <div className="md:h-[89vh] overflow-auto">

        <Routes>

          <Route index element={<HomeIndex />} />

        </Routes>

      </div>

    </>
  )
}

export default App