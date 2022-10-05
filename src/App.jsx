import { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import HomePage from './pages/Home/HomePage'
import AdvicePage from './pages/Advice/AdvicePage'
import Footer from './components/footer/Footer'

import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/advice' element={<AdvicePage />} />          
      </Routes>
      <Footer />
    </div>
  )
}

export default App
