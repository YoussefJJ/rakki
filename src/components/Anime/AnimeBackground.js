import React from 'react'

const AnimeBackground = ({
    imageUrl
}) => {
  return (
    <div
        className="background-img fixed bg-cover bg-no-repeat w-full h-screen top-0 left-0 -z-50"
        style={{ backgroundImage: `url('${imageUrl}')` }}
    ></div>
  )
}

export default AnimeBackground