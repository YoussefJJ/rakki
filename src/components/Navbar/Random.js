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
    id="random-btn"
    onClick={handleClick}
    className='flex flex-col px-5 items-center justify-center h-full group md:flex-row md:space-x-2'>
        <Dices
        className='h-6 w-6 md:h-8 md:w-8 dice stroke-brightGreen group-hover:stroke-white transition-all duration-200 ease-in'
        strokeOpacity={1}
        fillOpacity={0}
        strokeWidth={1}
        />
        <div 
        className='text-brightGreen text-xs md:text-base font-bold group-hover:text-white transition-all duration-200 ease-in'>
            TRY YOUR LUCK!
        </div>
    </button>
  )
}

export default Random