import React from 'react'


const Card = () => {
  return (
    <div className='flex flex-col  ' >
        <div className='h-75 w-100 m-auto border border-indigo-600 pt-3 rounded-3xl px-3 ' >
        <figure className='px-2'>
            <img
               src="/images/project4.png"
               alt="project 4"
               className='rounded-lg h-60 w-90  '
              />
        </figure>
        <h3 className='font-mono font-light '><span className='font-black'>XORA</span>-AI Video Editor(landing Page) </h3>
        </div>
    </div>
  )
}

export default Card