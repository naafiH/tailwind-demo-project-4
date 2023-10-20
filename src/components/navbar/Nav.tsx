import React from 'react'
import stellar from "../assets/stellar.png"
import home from "../assets/png1.png"
import Bckround from "../assets/pexelsimg.jpg"

export default function Nav() {
  return (
   <div className=' max-w-[1280px] mx-auto 'style={{backgroundImage:`url(${Bckround})`}}> 
      <div className='flex justify-center flex-col sm:flex-row py-2  max-w-[800px] mx-auto sm:justify-between items-center text-white capitalize  text-[12px] '>
        <img className='' src={stellar} alt="" />
        <div>
        <ul className='flex flex-col sm:flex-row justify-center items-center space-x-2 '>
          <li><img className='w-3 h-3 bg-white rounded-sm' src={home} alt="" /></li>
          <li>About</li>
          <li>team</li>
          <li>portfolio</li>
          <li>Careers</li>
          <li>Blog</li>
        <button className='py-1 px-3 border-white'>Buy now</button>
        </ul>
        </div>
      </div>
   </div>
  )
}
