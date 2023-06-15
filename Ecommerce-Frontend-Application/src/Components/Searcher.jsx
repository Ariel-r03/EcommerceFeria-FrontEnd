import React from 'react'
import {IconoLupa} from '../Assets'
function Searcher() {
  return (
    <div className='bg-slate-950 flex flex-row justify-center items-center w-full h-[90px]'>
      <input className='rounded-xl bg-white w-[350px] h-[35px] ' type="text"></input>
      <img className='absolute right-[2rem] sm:right-[38rem]' src={IconoLupa} alt="" />
    </div>
  )
}

export default Searcher