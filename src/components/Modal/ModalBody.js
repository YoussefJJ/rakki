import React from 'react'

const ModalBody = ({children}) => {
  return (
    <div className="overflow-y-auto w-full scrollbar">
        {children}
    </div>
  )
}

export default ModalBody