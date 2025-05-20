import React from 'react'
import Card from '../components/Card'

const Work = () => {
  return (
    <div >
       <h1 className='font-mono text-4xl font-bold ml-24 pt-24 pb-6 underline decoration-dashed underline-offset-8 decoration-sky-500'>Featured Projects</h1>
    <div id="counter"  className='grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 pl-32'>
    
    <Card 
      image={"images/project5.png"}
      title={"Subconcious"}
      subtitle={"A MERN-stack second brain app which is used to store your important Tweets and Links"}
      githubLink={"https://github.com/akshat1074/Subconcious"}
     />
    <Card 
         image={"images/project4.png"}
          title={"AI Video Editor(Landing Page) "}
          subtitle={" Using React and Tailwind a modern design landing page"}
          githubLink={"https://github.com/akshat1074/Xora"}/>
     <Card 
         image={"images/project6.png"}
          title={"Chatty "}
          subtitle={"A MERN-stack plus socket.io real-time chat application "}
          githubLink={"https://github.com/akshat1074/Chat"}/>
      <Card 
         image={"images/project7.png"}
          title={"Dashboard "}
          subtitle={"Using React and Tailwind a modern design Dashboard"}
          githubLink={"https://github.com/akshat1074/Dashboard"}/>      
       <Card 
         image={"images/project8.png"}
          title={"Portfolio "}
          subtitle={"A portfolio with  React plus Tailwind with animation and 3D model"}
          githubLink={"https://github.com/akshat1074/Portfolio"}/> 
       <Card 
         image={"images/project9.png"}
          title={"Nike-Clone "}
          subtitle={"Clone of Nike website"}
          githubLink={"https://github.com/akshat1074/Nike"}/>       
   
    </div>
    </div>
     
  )
}

export default Work