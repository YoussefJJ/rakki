import React from 'react'

const ModalBody = ({children}) => {
  return (
    <div className="overflow-y-auto w-full scrollbar-thin scroll-bar scrollbar-thumb-brightGreen scrollbar-track-veryDarkPurple active:scrollbar-thumb-darkGreen">
        {children}
    </div>
  )
}

export default ModalBody