import React from 'react'
import {NavBarComponent} from '../../Components'
import {RegisterForm} from './RegisterPageComponents'
function RegisterPage() {
  return (
    <div>
      <div className='sm:flex sm:h-auto justify-center'><NavBarComponent prop="hidden"/></div>
      <div className='sm:flex sm:h-auto justify-center bg-smoothSlate h-[100%]'><RegisterForm/> </div>
    </div>
  )    
}

export default RegisterPage
