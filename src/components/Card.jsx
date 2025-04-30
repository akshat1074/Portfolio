import { ExternalLink, Github } from 'lucide-react'
import React,{useState} from 'react'


const Card = ({image,title,subtitle,liveLink,githubLink}) => {
    const [isHovered,setIsHovered] = useState(false)

  return (
    <div 
    className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl"
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
           <a
             href={liveLink}
             className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded flex items-center space-x-2 transition-colors duration-300' 
             >
             <ExternalLink size={16}/>
             <span>Live Demo</span>
           </a>
           <a 
          href={githubLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-gray-700 hover:bg-gray-900 text-white px-4 py-2 rounded flex items-center space-x-2 transition-colors duration-300"
        >
          <Github size={16} />
          <span>GitHub</span>
        </a>
         </div>

    </div>
  )
}

export default Card