import React, { useState } from 'react'
import { getAnimeImage } from '../../utilities/utils';
import AddToFavourite from './AddToFavourite';

const AnimeCover = ({anime}) => {
  const [loading, setLoading] = useState(true);
  return (
    <div className='md:h-4/6 relative anime-cover'>
      <div className='absolute top-0 right-0 p-2 favourite w-full h-full'>
        <AddToFavourite id={anime.id} type={anime.type}/>
      </div>
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