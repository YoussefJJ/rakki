import React from 'react'

const RecTitle = ({
    romajiTitle,
    englishTitle
}) => {
  return (
    <div className='recommendation-title'>
        <h2 
        className="text-3xl text-gray-50 font-bold">
        {romajiTitle}
        </h2>
        <h4 className='text-md text-gray-200 font-medium'>{englishTitle}</h4>
    </div>
  )
}

export default RecTitle