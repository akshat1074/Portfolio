import React from 'react'
import Tailwind from '../icons/Tailwind'
import Docker from '../icons/Docker'
import Mongodb from '../icons/Mongodb'
import Nextjs from '../icons/Nextjs'
import Node from '../icons/Node'
import Postsql from '../icons/Postsql'
import Reactt from '../icons/Reactt'
import Typescript from '../icons/Typescript'
import Express from '../icons/Express'
import Javascript from '../icons/Javascript'
import Html from '../icons/Html'
import Css from '../icons/Css'
import Git from '../icons/Git'
import Socket from '../icons/Socket'

const iconComponents={
  Tailwind:Tailwind,
  Docker:Docker,
  Mongodb:Mongodb,
  Nextjs:Nextjs,
  Node:Node,
  Postsql:Postsql,
  Reactt:Reactt,
  Typescript:Typescript,
  Express:Express,
  Javascript:Javascript,
  Html:Html,
  Css:Css,
  Git:Git,
  Socket:Socket
 }

const Techcard = ({icon,text}) => {
    const IconComponent = iconComponents[icon]


  return (
    <div className='group  h-8 min-w-24 w-auto flex justify-center items-center border border-slate-900/50 rounded-xl  '>
    <div className='  bg-zinc-800 text-amber-50 group hover:bg-amber-50 group rounded-2xl p-1'>
        <div className='flex justify-center items-center gap-1 group hover:text-slate-950'>
          <IconComponent className='pl-2'/>
         
          <h3 className='pr-2 '>{text}</h3>
        </div>
    </div>
    </div>
  )
}

export default Techcard