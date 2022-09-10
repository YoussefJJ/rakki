import React, { useContext } from 'react'
import Heart from '../../assets/img/heart.svg'
import { ReactComponent as Hf} from '../../assets/img/heart-filled.svg'
import { useState } from 'react'
import { MediaContext } from '../../contexts/store.context'
import FavouriteToaster from '../Favourites/FavouriteToaster'

const AddToFavourite = ({ id, type, mobileScreen = true }) => {
  const { medias, dispatch } = useContext(MediaContext)
  const [toggle, setToggle] = useState(medias.mediaList[type?.toLowerCase() || 'anime'].find(mediaId => mediaId === id) ? true : false)
  const [message, setMessage] = useState(null)
  const handleClick = () => {
    //check if already added to favourites
    if (medias && medias.mediaList[type.toLowerCase()].find(mediaId => mediaId === id)) {
      dispatch({ type: `REMOVE_${type}`, payload: { id } })
      setMessage('Removed from favourites')
    } else {
      dispatch({ type: `ADD_${type}`, payload: { id } })
      setMessage('Added to favourites')
    }
    setToggle(!toggle)
    // dispatch({type: `ADD_${type.toUpperCase()}`, payload: {id}})
  }
  if (!mobileScreen)
  return (
    <div className='hidden md:block'>
      <div className="relative z-30">
      <button
      onClick={handleClick} 
      className='modal-button uppercase z-20 max-w-full text-sm bg-veryDarkPurple py-2 px-2 text-white font-bold border-2 border-black hover:enabled:bg-darkPurple outline-none focus:outline-none ease-linear transition-all duration-150'>
        <div className='flex space-x-1'>
        <Hf 
        id="fav-icon"
        title='Add to favourites'
        className={`stroke-white ${toggle ? 'fill-brightGreen pressed-animation' : 'fill-transparent'}`}
        strokeWidth={toggle ? 0 : 6}
        style={{
          height: '20px',
          width: '20px',
        }}/>
      <div>
        like
      </div>
        </div>

      </button>
      <div className={`absolute h-full w-full bg-brightGreen top-0 -z-10 border-2 border-black box-border`}></div>
      </div>
      <FavouriteToaster message={message} position='bottom-right'/>
    </div>
    
  )
  else return (<div className='block md:hidden'>
  <div className="relative z-30">
  <button
  onClick={handleClick} 
  className='modal-button uppercase z-20 max-w-full text-sm bg-veryDarkPurple py-2 px-2 text-white font-bold border-2 border-black hover:enabled:bg-darkPurple outline-none focus:outline-none ease-linear transition-all duration-150'>
    <div className='flex space-x-1'>
    <Hf 
    id="fav-icon"
    title='Add to favourites'
    className={`stroke-white ${toggle ? 'fill-brightGreen pressed-animation' : 'fill-transparent'}`}
    strokeWidth={toggle ? 0 : 6}
    style={{
      height: '20px',
      width: '20px',
    }}/>
  <div>
    like
  </div>
    </div>

  </button>
  <div className={`absolute h-full w-full bg-brightGreen top-0 -z-10 border-2 border-black box-border`}></div>
  </div>
  <FavouriteToaster message={message} position='bottom-right'/>
</div>
)
}

export default AddToFavourite