import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import HomePage from './pages/Home/HomePage.jsx'
import AboutPage from './pages/About/AboutPage.jsx'
import SkillsPage from './pages/Skills/SkillPage.jsx'
import ContactPage from "./pages/Contact/ContactPage.jsx"

import Navbar from './components/Navbar/Navbar.jsx' 
import Footer from './components/Footer/Footer.jsx'

import { Outlet } from 'react-router-dom'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <header>
      <Navbar />
    </header>
    
    <main>
      <Outlet />
    </main>

    <footer>
      <Footer />
    </footer>
    </>
  )
}

export default App
