import React from 'react'
import {IconAddProduct} from '../Assets'

function CardProduct({props}) {
  return (
    <div className='border-2 shadow-lg py-2 flex my-[2rem]'>
      <img className='w-[100px] self-start' src={props.icon} alt="" />
      <div className='flex flex-col'>
        <h2 className='text-[#0465D8] text-[16px]'>{props.title}</h2>
        <p className='my-2 font-semibold text-[13px]'>{props.description}</p>
        <span className='text-[10px]'>Delivery estimado 28-30 Jul</span>
        <p className='my-[1rem] text-[#997032] font-semibold'>${props.price}</p>
        <div className='flex flex-row mb-[1rem] justify-end items-center'>
            <span className='mx-[0.5rem] text-[#0465D8] text-[13px] hover:cursor-pointer'>Agregar</span>
            <img className='mr-[1rem] hover:cursor-pointer' src={IconAddProduct} alt="" />
        </div>
      </div>

    </div>
  )
}

export default CardProduct
