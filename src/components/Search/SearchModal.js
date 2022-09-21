import React, { useEffect, useState } from 'react'
import {ReactComponent as Magnifier} from '../../assets/img/magnifier.svg'
import { useLocation } from 'react-router-dom'
import SearchIcon from '../../assets/img/search.svg'
import SearchContent from './SearchContent'

const SearchModal = () => {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const handleClose = (e) => {
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
  
  useEffect(() => {
    setOpen(false)
  }, [location])

  return (
    <>
    <button 
    onClick={() => setOpen(true)} 
    className='group my-auto'  
    style={{
            height: '30px',
            width: '30px',
        }}>
        <Magnifier 
        strokeWidth={6}
        className='h-full w-full group-hover:stroke-white stroke-brightGreen fill-transparent transition-all duration-150 ease-linear'
        />
    </button>
    {open ? (
        <div 
            onClick={handleClose}
            id="search-modal"
            className='inset-0 fixed bg-black/90 backdrop-blur-sm p-3 overflow-y-auto' style={{
                zIndex: 9999
        }}>
        <div className='fixed right-0 p-2 flex justify-center items-center' onClick={() => setOpen(false)}>
            <button className='relative h-6 w-6'>
                <div className='relative'>
                    <span className='close-button bg-brightGreen' style={{
                        transform: 'rotate(45deg)'
                    }}></span>
                    <span className='close-button bg-brightGreen' style={{
                        transform: 'rotate(-45deg)',
                    }}></span>
                </div>
            </button>
        </div>
        <SearchContent onClose={handleClose}/>
    </div>
    ) : null}
    </>
  )
}

export default SearchModal