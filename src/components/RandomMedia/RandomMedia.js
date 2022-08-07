import React, { useEffect, useState } from 'react'
import { getRandomInt } from '../../utilities/utils'

const RandomMedia = () => {
  const [mediaId, setMediaId] = useState(1);

  useEffect(() => {
    const getRandomMedia = () => {
        const min = 1;
        const max = 20000;
        const mediaId = getRandomInt(min, max, 1)
        setMediaId(mediaId)
      }
    getRandomMedia()
  }, [])
  

  return (
    <div>{mediaId}</div>
  )
}

export default RandomMedia