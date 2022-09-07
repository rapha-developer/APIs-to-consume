import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Hero from './pages/Home/Hero'
import Navbar from './components/navbar/Navbar'
import FindAdvice from './pages/Advice/find/FindAdvice'
import RandomAdvice from './pages/Advice/random/RandomAdvice'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <RandomAdvice />
      <FindAdvice />
    </div>
  )
}

export default App
