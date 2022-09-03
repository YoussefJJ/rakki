import React from 'react'
import Heart from '../../assets/img/heart.svg'
import { ReactComponent as Hf} from '../../assets/img/heart-filled.svg'
import { useState } from 'react'

const AddToFavourite = ({ id }) => {
  const [toggle, setToggle] = useState(false)
  return (
    <div className='relative h-full w-full flex justify-center'>
        <button 
        onClick={() => setToggle(!toggle)}>
            <Hf 
            id="fav-icon"
            className={`stroke-white ${toggle ? 'fill-brightPurple pressed-animation' : 'fill-transparent'}`}
            strokeWidth={toggle ? 0 : 4}
            height={'60%'} width={'60%'} style={{
                margin: 'auto'
            }}/>
            {/* <img 
            src={Heart} 
            alt='Add to Favourites' style={{
                height: '60%',
                width: '60%',
                margin: 'auto'
            }}/>     */}
        </button>
    </div>
  )
}

export default AddToFavourite