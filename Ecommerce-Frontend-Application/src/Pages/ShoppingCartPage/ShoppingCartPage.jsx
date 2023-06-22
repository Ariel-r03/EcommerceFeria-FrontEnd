import React from 'react'
import {NavBarComponent,Footer} from '../../Components'
import {ShoppingCartBody} from '../ShoppingCartPage/ShoppingCartComponents'
function ShoppingCartPage() {
  return (
    <div>
      <div>
        <NavBarComponent/>
      </div>
      <div className=''>
        <ShoppingCartBody/>
      </div>
      <div className="bg-smoothSlate sm:flex justify-center">
        <Footer/>
      </div>
    </div>
  )
}

export default ShoppingCartPage
