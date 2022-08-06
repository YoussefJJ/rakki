import React from 'react'

function AnimeInfo({infoTitle, infoContent}) {
  return (
    <>
    <strong className='text-gray-400'>
        {infoTitle}:
    </strong>
    <span className="text-sm text-gray-300">{infoContent}</span>
    </>
  )
}

export default AnimeInfo