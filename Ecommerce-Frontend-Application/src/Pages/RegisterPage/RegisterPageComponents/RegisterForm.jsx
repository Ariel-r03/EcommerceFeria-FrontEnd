import React from 'react'

function RegisterForm() {
  return (
    <section className='flex justify-center items-center min-h-full'>
      <form className='flex flex-col justify-center items-center bg-white rounded-xl shadow-xl min-w-[350px] sm:min-w-[500px] my-[5rem]' action="">
        <h1 className='my-[3rem] text-[18px] sm:text-[22px] font-semibold'>Crea tu cuenta en SmartCell</h1>
        <label className='self-start ml-[2rem] sm:ml-[3.2rem]' htmlFor="">Correo electrónico*</label>
        <input className="border-2 w-[280px] h-[40px] my-5 sm:w-[400px] sm:h-[45px] sm:my-5 px-2 shadow-md" type="text" />
        <label className='self-start ml-[2rem] sm:ml-[3.2rem]' htmlFor="">Contraseña</label>
        <input className="border-2 w-[280px] h-[40px] my-5 sm:w-[400px] sm:h-[45px] sm:my-5 px-2 shadow-md" type="password" />
        <label className='self-start ml-[2rem] sm:ml-[3.2rem]' htmlFor="">Confirmar contraseña</label>
        <input className="border-2 w-[280px] h-[40px] my-5 sm:w-[400px] sm:h-[45px] sm:my-5 px-2 shadow-md" type="password" />
        <label className='self-start ml-[2rem] sm:ml-[3.2rem]' htmlFor="">Nombre</label>
        <input className="border-2 w-[280px] h-[40px] my-5 sm:w-[400px] sm:h-[45px] sm:my-5 px-2 shadow-md" type="text" />
        <label className='self-start ml-[2rem] sm:ml-[3.2rem]' htmlFor="">Apellido</label>
        <input className="border-2 w-[280px] h-[40px] my-5 sm:w-[400px] sm:h-[45px] sm:my-5 px-2 shadow-md" type="text" />
        <div className='my-[3rem] flex flex-row justify-between sm:w-[380px] w-[280px] '>
          <button className='font-semibold rounded-full bg-blue-500 px-[2rem] py-2'>Atrás</button>
          <button className='font-semibold rounded-full bg-blue-500 px-[2rem] py-2'>Siguiente</button>
        </div>
      </form>
    </section>
  )
}

export default RegisterForm
