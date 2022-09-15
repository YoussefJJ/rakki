import React from 'react'
import Cat from '../../assets/img/sleeping-cat.gif'

const NotFound = () => {
  return (
    <div className='bg-veryDarkPurple h-[calc(100vh_-_80px)] w-full'>
      <div className='flex flex-col justify-center items-center h-full w-full space-y-2'>
        <img src={Cat} height="300px" width="300px" />
        <h1 className='text-white text-2xl font-bold text-center'>Error 404!</h1>
        <h2 className='text-white text-xl font-bold text-center'>Page Not found</h2>
      </div>
    </div>
  )
}

export default NotFound