import React from 'react'
import {LoginForm} from './LoginPageComponents'
import {NavBarComponent} from '../../Components'
function LoginPage() {
  return (
    <div>
      <div className='sm:flex h-[150px] sm:h-auto justify-center'>
        <NavBarComponent prop="hidden"/>
      </div>

      <div className='bg-smoothSlate h-screen sm:flex justify-center'>
        <LoginForm/>
      </div>
    </div>
  )
}

export default LoginPage
