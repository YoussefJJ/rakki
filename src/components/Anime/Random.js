import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as Dices} from '../../assets/img/dices.svg'

const Random = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    // Get media type from URL
    let mediaType = window.location.pathname.split('/')[1]
    mediaType = mediaType === 'anime' || mediaType === 'manga' ? mediaType : 'anime';
    // Go to random url
    navigate(`/${mediaType}`)
  }


  return (
    <button 
    onClick={handleClick}
    className='flex px-5 items-center  space-x-2 h-full group'>
        <Dices
        className='h-8 w-8 stroke-brightGreen group-hover:stroke-white transition-all duration-200 ease-in'
        strokeOpacity={1}
        fillOpacity={0}
        strokeWidth={1}
        />
        <div 
        className='text-brightGreen font-bold group-hover:text-white transition-all duration-200 ease-in'>
            TRY YOUR LUCK!
        </div>
    </button>
  )
}

export default Random