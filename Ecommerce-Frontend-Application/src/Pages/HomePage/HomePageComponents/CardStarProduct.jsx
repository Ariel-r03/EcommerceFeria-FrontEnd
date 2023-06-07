import React from 'react'
function CardStarProduct({product}) {
  return (
    <div className='flex flex-col'>
      <div className='bg-smoothSlate rounded-xl sm:w-[350px] h-[350px] flex justify-center'>
        <img className='self-center' src={product.icon} alt="" />
      </div>
    
      <h2 className='font-semibold mt-3 mb-1 self-center '>{product.title}</h2>
      <p className='text-[#997032] self-center mb-[3rem]'>${product.price}</p>
    </div>
  )
}

export default CardStarProduct
