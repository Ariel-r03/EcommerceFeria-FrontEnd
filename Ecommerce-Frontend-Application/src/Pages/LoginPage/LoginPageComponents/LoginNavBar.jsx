import React from 'react'
import {NavLinks} from '../../../Constants'
import {Logo} from '../../../Assets'
import { useNavigate } from 'react-router-dom';
function LoginNavBar() {

    const navigate = useNavigate();
 
  return (
    <section className="sm:w-[90%]">
      <nav  className='flex flex-row justify-around items-center'>
        <div>
            <img onClick={()=>{
                navigate("/")
            }} className='w-[150px] h-[80px] hover:cursor-pointer' src={Logo} alt="" />
        </div>

        <ul className='flex flex-row'>
            {
                NavLinks.map((link)=>(
                    <li className='mx-3 hover:cursor-pointer hover:text-slate-400'>{link.title}</li>
                ))
            }
        </ul>
      </nav>
    </section>
  )
}

export default LoginNavBar
