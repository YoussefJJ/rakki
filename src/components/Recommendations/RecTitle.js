import React from 'react'

const RecTitle = ({
    romajiTitle,
    englishTitle
}) => {
  return (
    <div className='recommendation-title'>
        <h2 
        className="text-3xl text-brightGreen font-bold">
        {romajiTitle}
        </h2>
        <h4 className='text-md text-brightGreen font-medium'>{englishTitle}</h4>
    </div>
  )
}

export default RecTitle