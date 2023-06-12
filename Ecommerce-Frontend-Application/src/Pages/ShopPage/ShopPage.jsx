import React from 'react'
import {NavBarComponent,Searcher,Footer} from '../../Components'
import {ShopPageBody} from '../ShopPage/ShopPageComponents'
function ShopPage() {
  return (
    <div>
      <div className='sm:flex sm:h-auto justify-center'>
        <NavBarComponent/>
      </div>
      <div className='sm:flex sm:h-auto justify-center'>
        <Searcher/>
      </div>
      <div className='mx-[2rem] sm:flex sm:h-auto '>
        <ShopPageBody/>
      </div>
      <footer className='bg-smoothSlate sm:flex justify-center'>
        <Footer/>
      </footer>
    </div>
  )
}

export default ShopPage
