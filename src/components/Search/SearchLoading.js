import React from 'react'
import Nezuko from '../../assets/img/nezuko.gif'

const SearchLoading = () => {
  return (
    <div className='w-full h-full flex justify-center items-center'>
        <img src={Nezuko} alt='Search Loading' style={{
            height: 'auto',
            width: '128px',
        }}/>
    </div>
  )
}

export default SearchLoading