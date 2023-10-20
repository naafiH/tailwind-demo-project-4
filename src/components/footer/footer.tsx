import React from 'react'
import tick from "../assets/tick.png"

export default function footer() {
  return (
    <div className=' max-w-[1280px] mx-auto text-black'>
        <div className='flex flex-col justify-center items-center my-12'>
            <h1  className=' text-xl sm:text-5xl '> About Stellar</h1>
            <p className=' text-[10px] sm:text-[15px]  text-zinc-500'>More about what this can do for your business.</p>
        </div>
        <div className='flex flex-wrap justify-center items-center my-10'>
            <div className='flex flex-col items-center justify-center'>
                <img className='w-5 h-5 my-2'  src={tick} alt="" />
                <h2 className='text-xl capitalize'>Clean & simple</h2>
                <p className='max-w-[300px] text-[10px] py-3 text-center '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, mollitia inventore</p>
            </div><div className='flex flex-col items-center justify-center'>
                <img className='w-5 h-5 my-2'  src={tick} alt="" />
                <h2 className='text-xl capitalize'>Clean & simple</h2>
                <p className='max-w-[300px] text-[10px] py-3 text-center '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, mollitia inventore</p>
            </div><div className='flex flex-col items-center justify-center'>
                <img className='w-5 h-5 my-2'  src={tick} alt="" />
                <h2 className='text-xl capitalize'>Clean & simple</h2>
                <p className='max-w-[300px] text-[10px] py-3 text-center '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, mollitia inventore</p>
            </div>
        </div>
    </div>
  )
}
