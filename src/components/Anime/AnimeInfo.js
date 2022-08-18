import React from 'react'

function AnimeInfo({infoTitle, children}) {
  return (
    <>
    <strong className='text-brightPurple 2xl:text-4xl'>
        {infoTitle}:
    </strong>
    <span className="text-sm 2xl:text-2xl text-gray-300">{children}</span>
    </>
  )
}

export default AnimeInfo