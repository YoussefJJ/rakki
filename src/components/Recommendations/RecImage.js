import React, { useState } from 'react'

const RecImage = ({
    imageUrl,
    altTitle,

}) => {
  const [loaded, setLoaded] = useState(false)
  return (
    <img
        onLoad={() => {
            setLoaded(true);
        }}
        className={`w-full h-full object-cover align-middle recommendation-img${loaded ? '' : '-loading'}`} 
        src={imageUrl} 
        alt={altTitle} style={{
            width: "100%",
            height: "200px",
        }}/>
  )
}

export default RecImage