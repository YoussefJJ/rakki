import React from 'react'

const AnimeBackground = ({
    imageUrl
}) => {
  return (
    // <div
    //     className="background-img fixed bg-cover bg-no-repeat w-full h-screen -z-50"
    //     style={{ backgroundImage: `url('${imageUrl}')` }}
    // ></div>
    <img 
    className='fixed bg-no-repeat object-cover max-w-full h-screen top-0 left-0 right-0 bottom-0 -z-50'
    src={imageUrl}></img>
  )
}

export default AnimeBackground