import React from 'react'

const Button = ({text,className,id}) => {
  return (
    <a   
       onClick={(e)=>{
         e.preventDefault();

         const target = document.getElementById("counter");

         if(target && id){
          const offset = window.innerHeight * 0.15; // Leave a bit of space at the top

          // Calculate how far down the page we need to scroll
          const top =
            target.getBoundingClientRect().top + window.pageYOffset - offset;

          // Scroll smoothly to that position
          window.scrollTo({ top, behavior: "smooth" });
         }
       }}>
        <div className='cta-button group'>
            <div className='bg-circle'/>
            <p className='text'>{text}</p>
              <img src="/images/arrow-down.svg" alt="arrow"/>
        </div>
    </a>
  )
}

export default Button