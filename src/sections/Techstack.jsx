import React from 'react'
import Techcard from '../components/Techcard'

const Techstack = () => {
  return (
    <div className='flex justify-center items-center p-2 gap-2'>
    <Techcard 
    icon="Node"
    text="Nodejs"
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
    icon="Tailwind"
    text="tailwindcss"
    />
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
    icon="Tailwind"
    text="tailwindcss"
    />
    </div>
)
}

export default Techstack