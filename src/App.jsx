import React from 'react'
import Hero from './sections/Hero'
import Card from './components/Card'
import NavBar from './components/NavBar'
import Contact from './sections/Contact'

import Techcard from './components/Techcard'
import Techstack from './sections/Techstack'
import Work from './sections/Work'



const App = () => {
  return (
    <>
    <NavBar/>
    <Hero/>
    <Techstack/>
    <Work/>
 
    <Contact/>
    </>
  )
}

export default App