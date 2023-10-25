import stellar from "../assets/stellar.png"
import home from "../assets/png1.png"
import Bckround from "../assets/body2img2.jpg"

export default function Nav() {
  return (
   <div className=' max-w-[1280px] mx-auto 'style={{backgroundImage:`url(${Bckround})`}}> 
      <div className='flex justify-center flex-col sm:flex-row py-2  max-w-[800px] mx-auto sm:justify-between items-center text-white capitalize  text-[12px] '>
        <img className='rounded-full' src={stellar} alt="" />
        <div>
        <ul className='flex flex-col sm:flex-row justify-center items-center space-x-2 '>
          <li><img className='w-6 h-6 m-1 p-1 bg-white rounded-full '  src={home} alt="" /></li>
          <li className="bg-violet-800 rounded-full font-bold px-2 py-1">About</li>
          <li className="bg-violet-800 rounded-full font-bold px-2 py-1">team</li>
          <li className="bg-violet-800 rounded-full font-bold px-2 py-1">portfolio</li>
          <li className="bg-violet-800 rounded-full font-bold px-2 py-1">Careers</li>
          <li className="bg-violet-800 rounded-full font-bold px-2 py-1">Blog</li>
        <button className='py-1 px-3 border-white bg-violet-800 rounded-full font-bold'>Buy now</button>
        </ul>
        </div>
      </div>
   </div>
  )
}
