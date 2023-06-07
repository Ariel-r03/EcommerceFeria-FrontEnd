import React from 'react'

export default function SubscriptionForm() {
  return (
    <section className='bg-white px-[3rem] py-[2rem] flex flex-col justify-center items-center w-full sm:w-[80%]'>
      <p className='mt-2 mb-5 font-extrabold text-[30px]'>¡Suscribete para novedades!</p>
      <span className='text-[16px]'>¡No te pierdas ningún nuevo artículo en la tienda!</span>
      <div className='mt-[1.5rem] sm:mt-[3rem]'>
        <input className='border-2 w-[250px] h-[35px] mr-[1rem] mb-[1rem]' placeholder='Email' type="text" />
        <button className='font-semibold bg-smoothSlate w-[250px] h-[35px]'>Suscribirme</button>
      </div>
    </section>
  )
}
