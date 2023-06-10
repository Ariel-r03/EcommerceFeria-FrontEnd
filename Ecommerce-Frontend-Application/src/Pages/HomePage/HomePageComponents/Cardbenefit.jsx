import React from 'react'

function Cardbenefit({benefit}) {
  return (
    <div className='flex flex-col'>
        <img className='w-[70px] h-[70px] self-center my-2' src={benefit.icon} alt="" />
        <h1 className='text-[13px] sm:text-[16px] self-center font-extrabold my-2'>{benefit.title}</h1>
        <p className='text-[12px] sm:text-[14px] sm:min-h-[130px] text-justify '>{benefit.description}</p>
        <button className='border-2 border-solid border-slate-950 w-[115px] self-center my-5 '>Leer más</button>
    </div>
  )
}

export default Cardbenefit