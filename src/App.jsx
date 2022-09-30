import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/navbar/Navbar'
import HomePage from './pages/Home/HomePage'
import MyProjects from './pages/Home/components/MyProjects/MyProjects'
import AllApis from './pages/Home/components/allApis/AllApis'
import SectionVideo from './pages/Home/components/OurVideo/SectionVideo'
import AboutUs from './pages/Home/components/About/AboutUs'
import Subscribe from './pages/Home/components/Subscribe/Subscribe'
import Footer from './components/footer/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <MyProjects />
      <AllApis />
      <SectionVideo />
      <AboutUs />
      <Subscribe />
      <Footer />
    </div>
  )
}

export default App
