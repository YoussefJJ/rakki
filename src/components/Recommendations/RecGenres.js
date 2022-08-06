import React from 'react'

const RecGenres = ({
    genres
}) => {
  return (
    <div 
    className='recommendation-genres bg-gray-500 text-gray-50 text-sm py-1 px-2'
    >
        <p>{genres}</p>
    </div>
  )
}

export default RecGenres