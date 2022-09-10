import React from 'react'
import { useEffect } from 'react'
import { useToaster } from '../../hooks/useToaster'

const positions =
    {
        'top': 'top-24',
        'bottom': 'bottom-2',
        'top-left': 'top-24 left-2 mr-auto',
        'top-right': 'top-24 right-2 ml-auto',
        'bottom-left': 'bottom-2 left-2 mr-auto',
        'bottom-right': 'bottom-2 right-2 ml-auto',
        'top-middle': 'top-24 left-0 right-0 m-auto',
        'bottom-middle': 'bottom-2 left-0 right-0 m-auto',
    }

const FavouriteToaster = ({ message, position }) => {
  const [show, showToaster] = useToaster()
    useEffect(() => {
        if (message && message.length > 0)
            showToaster()
    }, [message])

  return (
    show && (<div 
        style={{
            margin: 'auto',
        }}
    className={`bg-darkPurple/70 backdrop-blur-sm ${positions[position] || positions['top-middle']} \\
      text-sm text-white p-1 toaster max-w-fit`}>
      <div className='font-bold'>
        {message}
      </div>
    </div>)
  )
}

export default FavouriteToaster