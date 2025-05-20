import { ExternalLink, Github, GithubIcon } from 'lucide-react'
import React,{useState} from 'react'


const Card = ({image,title,subtitle,liveLink,githubLink}) => {
    const [isHovered,setIsHovered] = useState(false)

  return (
    <div 
    className=" py-4 my-8 max-w-sm rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-cyan-200 via-sky-100 to-blue-200  transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl"
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
  >
  
        <div className='relative overflow-hidden' >
          <img
                src={image}
               alt={title}
               className={`w-full h-48 object-cover transition-transform duration-700 ${isHovered ? 'scale-110':'scale-100'} `}
              />
             <div className={`absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 ${isHovered ? 'opacity-25' : 'opacity-0'}`}></div> 
             </div>
         <div className='px-6 py-4'>
          <h2 className='font-bold text-xl mb-2 text-gray-800'>{title}</h2>
            <p className='text-gray-600 text-sm'>{subtitle}</p>
         </div>

         <div className='px-6 pt-2 pb-4 flex justify-between'>
           {/*<a
             href={liveLink}
             className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded flex items-center space-x-2 transition-colors duration-300' 
             >
             <ExternalLink size={16}/>
             <span>Live Demo</span>
           </a>
           */}
           <div className='group'>
           <a href={githubLink} target="_blank" className='flex items-center px-5 py-2 rounded-lg bg-black text-white group-hover:bg-white-50 transition-colors duration-300 '>
                <div className='group-hover:text-black transition-colors duration-300' >
                   <span className='flex items-center ' >
                      <GithubIcon/>
                       Github
                   </span>
                </div>
             </a>
             </div>
         </div>

    </div>
  )
}

export default Card