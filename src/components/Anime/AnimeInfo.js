import React from 'react'

function AnimeInfo({infoTitle, children}) {
  return (
    <>
    <strong className='text-gray-400'>
        {infoTitle}:
    </strong>
    <span className="text-md text-gray-300">{children}</span>
    </>
  )
}

export default AnimeInfo