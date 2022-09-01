import React, { useEffect, useState } from 'react'
import SearchIcon from '../../assets/img/search.svg'
import SearchContent from './SearchContent'

const SearchModal = () => {
  const [open, setOpen] = useState(false)

  const handleClose = (e) => {
    console.log(e.target)
    if (e.target.id === 'search-modal') {
      setOpen(false)
    }
  }

  useEffect(() => {
    // add event listener on escape key press
    const handleEscape = (e) => {
        if (e.key === 'Escape') {
            setOpen(false)
        }
    }
    document.addEventListener('keydown', handleEscape)
    return () => {
        document.removeEventListener('keydown', handleEscape)
    }
  }, [])
  
  return (
    <>
    <button onClick={() => setOpen(true)}>
        <img src={SearchIcon} alt='search' style={{
            height: '30px',
            width: '30px',
        }}/>
    </button>
    {open ? (
        <div 
            onClick={handleClose}
            id="search-modal"
            className='h-screen w-screen inset-0 fixed bg-black/90 backdrop-blur-sm p-3 overflow-y-auto' style={{
                zIndex: 9999
        }}>
        <SearchContent onClose={handleClose}/>
        <button className='fixed top-0 right-0 h-6 w-6' onClick={() => setOpen(false)}>
            <div className='relative'>
                <span className='absolute left-0 w-1 h-6 bg-brightGreen' style={{
                    transform: 'rotate(45deg)',
                }}></span>
                <span className='absolute left-0 w-1 h-6 bg-brightGreen' style={{
                    transform: 'rotate(-45deg)',
                }}></span>
            </div>
        </button>
    </div>
    ) : null}
    </>
  )
}

export default SearchModal