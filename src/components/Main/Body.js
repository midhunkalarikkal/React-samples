import React from 'react'
import Sidebar from './Sidebar'
import Content from './Content'

const Body = () => {
  return (
    <div className='flex'>
        <Sidebar />
        <Content />
    </div>
  )
}

export default Body