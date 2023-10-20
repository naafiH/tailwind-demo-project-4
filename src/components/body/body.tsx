import React from 'react'
import Bckround from "../assets/pexelsimg.jpg"


export default function body() {
  return (
    <div className=' max-w-[1280px] mx-auto text-white  'style={{backgroundImage:`url(${Bckround})`}} >
        <div className='flex flex-col sm:h-screen justify-center items-center'>
        <h1 className=' text-xl sm:text-5xl font-mono' >This is stellar.</h1>
        <p className='sm:text-[10px] text-[7px]  '>Responsive,Retina ready,sketch support</p>
        <div className='space-x-3 font-bold '>
            <button className='border-[2px] uppercase rounded-full px-4 py-1.5 my-10'>learn more </button>
            <button className='bg-black   rounded-full uppercase px-4 py-2 my-10'>watch video</button>
        </div>
        </div>  
    </div>
  )
}
