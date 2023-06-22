import React from 'react'
import {sidebarMenu} from '../../../Constants'
import {Logo,CloseSession} from '../../../Assets'
function SidebarMenu() {
  return (
    <section className='border border-slate-900 flex flex-col justify-center items-center  min-h-screen'>
      <div className='border-b border-slate-900 w-full h-[100px] flex justify-center'>
        <img className='w-[180px]' src={Logo} alt="" />
      </div>
      <ul className='flex flex-col justify-center border-b border-slate-900 w-full'>
        {
            sidebarMenu.map((menu)=>(
                <li className='flex flex-row border-b border-slate-900 py-[1rem] pl-[2rem] items-center hover:cursor-pointer'>
                    <img src={menu.icon} alt="" />
                    <p className='mx-5'>{menu.title}</p>
                </li>
            ))
        }
      </ul>
      <div className='flex flex-row items-center pt-[3rem]'>
        <img src={CloseSession} alt="" />
        <p className='mr-[4rem] ml-[1rem]'>Cerrar Sesión</p>
      </div>
    </section>
  )
}

export default SidebarMenu
