import React, { useState } from 'react'
import { getAnimeImage } from '../../utilities/utils';

const AnimeCover = ({anime}) => {
  const [loading, setLoading] = useState(true);
  return (
    <div className='md:h-4/6'>
        <img 
        onLoad={() => setLoading(false)}
        src={getAnimeImage(anime)} alt="anime" 
        style={{
            height: '100%'
        }}
        className={`w-full border-2 border-brightGreen shadow-greenRecShadow anime-background${loading ? '-loading' : ''}`} />
    </div>
  )
}

export default AnimeCover