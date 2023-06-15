import React from 'react'

function BannerCard({props}) {
  return (
    <div className='border-2'>
      <img className='min-w-full' src={props.icon}></img>
      <div className='absolute top-40 left-20'>
        <p className='font-bold text-white text-[30px]'>{props.title}</p>
        <p className='font-semibold my-5  text-[20px] text-white'>{props.description}</p>
        <button className='my-3 w-[200px] bg-smoothSlate h-[40px] rounded-full font-bold'>Descubre más</button>
      </div>
    </div>
  )
}

export default BannerCard
