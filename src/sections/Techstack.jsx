import React from 'react'
import Techcard from '../components/Techcard'

const Techstack = () => {
  return (
    <div >
    
       <h1 className='font-mono text-4xl font-bold  pl-24 pt-12 pb-6 underline decoration-dashed underline-offset-8 decoration-sky-500'>Tools I have used</h1>
   <div className='flex  justify-center items-center  gap-2 pt-4 max-w-5xl
'>
    <Techcard 
    icon="Node"
    text="Nodejs"
    />
    <Techcard
     icon="Javascript"
     text="Javascript"
    />
    <Techcard 
    icon="Typescript"
    text="Typescript"
    />
    <Techcard 
    icon="Reactt"
    text="React"
    />
    <Techcard 
    icon="Html"
    text="HTML"
    />
    <Techcard 
    icon="Css"
    text="CSS"
    />
    <Techcard 
    icon="Tailwind"
    text="tailwindcss"
    />
 
    </div>
    <div className='flex justify-center items-center content-between gap-2 pt-4 max-w-5xl'>
    <Techcard 
    icon="Nextjs"
    text="Nextjs"
    />
    <Techcard 
    icon="Mongodb"
    text="Mongodb"
    />
    <Techcard 
    icon="Postsql"
    text="tailwindcss"
    />
    <Techcard 
    icon="Docker"
    text="Docker"
    />
    <Techcard 
    icon="Git"
    text="Git"
    />
    <Techcard
     icon="Express"
     text="express"/>
     </div>
    
    </div>
)
}

export default Techstack