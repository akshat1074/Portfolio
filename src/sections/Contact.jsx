import { Github, Linkedin  } from 'lucide-react'
import React from 'react'
import X from '../icons/X'
import Discord from '../icons/Discord'

const Contact = () => {
  return (
    <div id="contact" className='pl-24 pr-12 py-12 bg-slate-800'>
        <div>
            <h1 className='font-mono text-4xl font-bold underline decoration-dashed underline-offset-8 decoration-sky-500'>Get in Touch</h1>
            <p className='pt-4'>If you have any inquiries, please feel free to reach out. You can contact me via email at</p>
            <span className='text-cyan-400'> aveditswork@gmail.com </span>
           

        </div>
        <div className='flex justify-start items-center gap-2 pt-3'>
            <a href='https://github.com/akshat1074' >
            <Github className= ' h-10 w-10 border border-slate-100/50 rounded-lg gap-2 p-1 bg-black hover:bg-slate-700 '/>
            </a>
             
            <a href='https://x.com/scramber01'>
            <X />
            </a>
            <a href='https://www.linkedin.com/in/akshat-valani-551a572a6/'>
            <Linkedin className= ' h-10 w-10 border border-slate-100/50 rounded-lg gap-2 p-1 bg-black hover:bg-blue-600'/>
            </a>
            <a href='https://discord.com/users/akshatvalani_45188'>
              <Discord/>
            </a>
            
        </div>
    </div>
  )
}

export default Contact