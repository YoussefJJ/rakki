import React, { useContext } from 'react'
import Heart from '../../assets/img/heart.svg'
import { ReactComponent as Hf} from '../../assets/img/heart-filled.svg'
import { useState } from 'react'
import { MediaContext } from '../../contexts/store.context'

const AddToFavourite = ({ id, type }) => {
  const { medias, dispatch } = useContext(MediaContext)
  const [toggle, setToggle] = useState(medias.mediaList.find(mediaId => mediaId === id) ? true : false)

  const handleClick = () => {
    //check if already added to favourites
    if (medias.mediaList.find(mediaId => mediaId === id)) {
      dispatch({ type: `REMOVE_MEDIA`, payload: { id } })
    } else {
      dispatch({ type: `ADD_MEDIA`, payload: { id } })
    }
    setToggle(!toggle)
    // dispatch({type: `ADD_${type.toUpperCase()}`, payload: {id}})
  }

  return (
    <div className='relative h-full w-full flex flex-col justify-center'>
        <button
        onClick={handleClick}>
            <Hf 
            id="fav-icon"
            className={`stroke-white ${toggle ? 'fill-brightPurple pressed-animation' : 'fill-transparent'}`}
            strokeWidth={toggle ? 0 : 4}
            height={'60%'} width={'60%'} style={{
                margin: 'auto'
            }}/>
            <div className={`${toggle ? 'text-brightGreen' : 'text-white'} font-bold`}>
              {toggle ? 'Added to favourites!' : 'Add to favourites'}
            </div>
        </button>
    </div>
  )
}

export default AddToFavourite