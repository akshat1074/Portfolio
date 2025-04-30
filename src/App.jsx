import React from 'react'
import Hero from './sections/Hero'
import Card from './components/Card'

const App = () => {
  return (
    <>
    <Hero/>
    <Card image={"images/project4.png"}
          title={"AI Video Editor "}
          subtitle={"React+Tailwind"}/>
   
    </>
  )
}

export default App