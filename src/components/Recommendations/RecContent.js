import React from 'react'

const RecContent = ({
    children,
    onClick
}) => {
  return (
    <div 
    onClick={onClick}
    className="inline-block object-cover p-1 recommendation-container cursor-pointer recomm-content" style={{
      width: '95%'
    }}>
        <div className="w-full inline-block border-2 border-brightGreen bg-gray-700 p-0.5 relative">
            <div className='overflow-hidden relative'>
                {children}
            </div>
        </div>
    </div>
  )
}

export default RecContent