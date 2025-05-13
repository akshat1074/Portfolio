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
    <div>
       <h1 className='font-mono text-4xl font-bold ml-24 pt-24 pb-6 underline decoration-dashed underline-offset-8 decoration-sky-500'>Featured Projects</h1>
    <div className='grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 pl-32'>
    
    <Card 
      image={"images/project5.png"}
      title={"Subconcious"}
      subtitle={"A second brain"}
      githubLink={"https://github.com/akshat1074/Subconcious"}
     />
    <Card 
         image={"images/project4.png"}
          title={"AI Video Editor "}
          subtitle={"React+Tailwind"}
          githubLink={"https://github.com/akshat1074/Xora"}/>
     <Card 
         image={"images/project6.png"}
          title={"AI Video Editor "}
          subtitle={"React+Tailwind"}
          githubLink={"https://github.com/akshat1074/Chat"}/>
      <Card 
         image={"images/project7.png"}
          title={"AI Video Editor "}
          subtitle={"React+Tailwind"}
          githubLink={"https://github.com/akshat1074/Dashboard"}/>      
   
    </div>
    </div>
     
 
    <Contact/>
    </>
  )
}

export default App