import React from 'react'

function AnimeInfo({infoTitle, children}) {
  return (
    <>
    <strong className='text-brightPurple 2xl:text-2xl'>
        {infoTitle}:
    </strong>
    <span title={children} className="text-base 2xl:text-xl text-gray-300 line-clamp-1">{children}</span>
    </>
  )
}

export default AnimeInfo