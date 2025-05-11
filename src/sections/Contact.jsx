import { Github, Linkedin, Twitter, TwitterIcon, X } from 'lucide-react'
import React from 'react'

const Contact = () => {
  return (
    <div className='pl-24 pr-12 py-12'>
        <div>
            <h1 className='text-4xl font-bold'>Get in Touch</h1>
            <p className='pt-4'>If you have any inquiries, please feel free to reach out. You can contact me via email at</p>
            <span className='text-cyan-400'> aveditswork@gmail.com </span>
           

        </div>
        <div className='flex justify-start items-center gap-2 pt-3'>
            <a href='https://github.com/akshat1074' >
            <Github className= ' h-10 w-10 border border-slate-100/50 rounded-lg gap-2 p-1 bg-black hover:bg-blue-300 '/>
            </a>
             
            
            <Twitter className= ' h-10 w-10 border border-slate-100/50 rounded-lg gap-2 p-1'/>
            <Linkedin className= ' h-10 w-10 border border-slate-100/50 rounded-lg gap-2 p-1'/>
        </div>
    </div>
  )
}

export default Contact