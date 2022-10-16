import { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import HomePage from './pages/Home/HomePage'
import AdvicePage from './pages/Advice/AdvicePage'
import Footer from './components/footer/Footer'

import { Routes, Route } from 'react-router-dom'
import './App.css'
import RickPage from './pages/RickyMorty/RickPage'
import { createItemsToBuildNavbar, createPagesPosition } from './data/constants'
import PokemonPage from './pages/Pokemon/PokemonPage'
function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path={createItemsToBuildNavbar[createPagesPosition.first].url} 
              element={<HomePage />} />
        <Route path={createItemsToBuildNavbar[createPagesPosition.second].url} 
              element={<AdvicePage />} />   
        <Route path={createItemsToBuildNavbar[createPagesPosition.third].url} 
              element={<RickPage />} />
        <Route path={createItemsToBuildNavbar[createPagesPosition.fourth].url}
              element={<PokemonPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
