import React from 'react'
import Cat from '../../assets/img/sleeping-cat.gif'

const MediaError = () => {
  return (
    <div className='h-[calc(100vh_-_80px)] w-full bg-veryDarkPurple'>
        <div className='flex flex-col justify-center items-center h-full w-full space-y-2'>
            <img src={Cat} style={{
                height: '300px',
                width: '300px'
            }}/>
            <h1 className='text-white text-lg font-bold text-center'>Error 404!</h1>
            <h2 className='text-white text-base font-bold text-center'>Media Not found</h2>
        </div>
    </div>
  )
}

export default MediaError