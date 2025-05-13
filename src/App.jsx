import React from 'react'
import Hero from './sections/Hero'
import Card from './components/Card'
import NavBar from './components/NavBar'
import Contact from './sections/Contact'

import Techcard from './components/Techcard'
import Techstack from './sections/Techstack'



const App = () => {
  return (
    <>
    <NavBar/>
    <Hero/>
    <Techstack/>
    <div className='grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 pl-32'>
    
    <Card 
      image={"images/project5.png"}
      title={"Subconcious"}
      subtitle={"A second brain"}
     />
    <Card 
         image={"images/project4.png"}
          title={"AI Video Editor "}
          subtitle={"React+Tailwind"}/>
     <Card 
         image={"images/project6.png"}
          title={"AI Video Editor "}
          subtitle={"React+Tailwind"}/>
      <Card 
         image={"images/project7.png"}
          title={"AI Video Editor "}
          subtitle={"React+Tailwind"}/>      
   
    </div>

     
 
    <Contact/>
    </>
  )
}

export default App