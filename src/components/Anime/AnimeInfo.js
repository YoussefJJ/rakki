import React from 'react'

function AnimeInfo({infoTitle, children}) {
  return (
    <>
    <strong className='text-brightPurple'>
        {infoTitle}:
    </strong>
    <span className="text-sm text-gray-300">{children}</span>
    </>
  )
}

export default AnimeInfo