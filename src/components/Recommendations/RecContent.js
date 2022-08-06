import React from 'react'

const RecContent = ({
    children,
    onClick
}) => {
  return (
    <div 
    onClick={onClick}
    className="w-full inline-block object-cover p-1 recommendation-container cursor-pointer">
        <div className="w-full inline-block rounded bg-gray-700 p-0.5 relative">
            <div className='overflow-hidden relative'>
                {children}
            </div>
        </div>
    </div>
  )
}

export default RecContent