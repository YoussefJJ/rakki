import React from 'react'

const Recommendation = ({
    data
}) => {
  const genres = data.genres.map(genre => genre).join(', ')
  return (
    <div 
    id="recommendation-container"
    className="w-full inline-block object-cover p-1">
        <div className="w-full inline-block rounded bg-gray-700 p-0.5 relative">
            <div className='overflow-hidden relative'>
                <div className='recommendation-title'>
                    <h2 
                    className="text-3xl text-gray-50 font-bold">
                    {data.title.romaji}
                    </h2>
                    <h4 className='text-md text-gray-200 font-medium'>{data.title.english}</h4>
                </div>
                <img
                id="recommendation-img"
                className='w-full h-full object-cover align-middle' 
                src={data.bannerImage} 
                alt={data.title.romaji} style={{
                    width: "100%",
                    height: "200px",
                }}/>
                <div 
                id='recommendation-genres'
                className='bg-gray-500 text-gray-50 text-sm py-1 px-2'>
                    <p>{genres}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Recommendation