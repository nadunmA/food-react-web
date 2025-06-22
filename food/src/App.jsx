import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import Hero from './Components/Hero/Hero'
import Abanner from './Components/AboutBanner/Abanner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>

      <NavBar />
      <Hero />
      <Abanner />
      
    </main>
  )
}

export default App
