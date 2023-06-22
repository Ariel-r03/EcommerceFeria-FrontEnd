import React from 'react'
import {SidebarMenu,ProductsTable} from '../AdminPage/AdminPageComponents'
function AdminPage() {
  return (
    <div className='w-[100%] flex'>
      <div className='w-[20%] min-h-screen'><SidebarMenu/></div>
      <div className='w-[80%]'><ProductsTable/></div>
    </div>
  )
}

export default AdminPage
