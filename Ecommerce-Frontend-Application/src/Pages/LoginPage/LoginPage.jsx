import React from 'react'
import {LoginNavBar,LoginForm} from './LoginPageComponents'
function LoginPage() {
  return (
    <div>
      <div className='sm:flex justify-center'>
        <LoginNavBar/>
      </div>

      <div className='bg-smoothSlate h-screen sm:flex justify-center'>
        <LoginForm/>
      </div>
    </div>
  )
}

export default LoginPage
