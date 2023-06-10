import React from 'react'
import {BannerImg} from '../../../Assets'
function HomePageHero() {
  return (
    <section className='sm:w-[80%] sm:flex justify-center' >
    <img className='object-cover sm:w-[100%] sm:h-[627px] self-center shadow-lg shadow-slate-500' src={BannerImg} alt="banner" />
    <div className='absolute w-[200px] left-[3rem] top-[6rem] sm:w-[400px] sm:left-[20rem] sm:top-[15rem]'>
      <h1 className='text-white text-[18px] sm:text-[40px] font-extrabold'>Compra Teléfonos <br /> y Accesorios </h1>
      <p className='text-white text-[11px] mt-2 sm:mt-5 sm:text-[15px]'>¡Bienvenido a nuestra tienda de celulares! Aquí encontrarás 
        una amplia selección de los últimos modelos de teléfonos móviles 
        de las principales marcas del mercado.</p>
      
      <button className='rounded-xl bg-smoothSlate w-[100px] h-[25px] text-[10px] font-bold sm:my-5 sm:w-[200px] sm:h-[40px] sm:text-[15px]'>Ver Productos</button>
    </div>

    </section>
  )
}

export default HomePageHero