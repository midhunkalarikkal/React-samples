import React from 'react'
import { Outlet } from 'react-router-dom'

const Content = () => {
  return (
    <div className='w-10/12 p-2'>
        <Outlet />
    </div>
  )
}

export default Content