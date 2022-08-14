import React, { useState } from 'react'
import { DAILYMOTION_URL, YOUTUBE_URL } from '../utilities/constants'

const TrailerModal = ({
    trailer,
    disabled,
    buttonText= 'Watch Trailer',
    disableText
}) => {

  const [showModal, setShowModal] = useState(false);
  return (
      <>
    <button
    disabled={disabled}
    className='bg-blue-800 text-white active:bg-blue-900 font-bold uppercase text-md px-6 py-3 rounded-md shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150'
    style={{
      opacity: disabled ? '0.3' : '1',
    }}
    type="button"
    onClick={() => setShowModal(true)}
  >
    {disabled && disableText ? disableText : buttonText}
  </button>
        {showModal ? (
          <>
            <div 
            // onClick={handleClose}
            id="modal"
            style={{
              margin: 0
            }}
            className="fixed z-50 inset-0 bg-gray-700 overflow-y-auto bg-opacity-30 backdrop-blur-sm">
                 <div 
                 id="button-zone"
                 className='fixed right-0 p-2 flex justify-items-center items-center'>
                  <button className="h-6 w-6 cursor-pointer relative " onClick={() => setShowModal(false)}>
                      <div className='relative'>
                        <span className="close-button" style={{
                          transform: 'rotate(45deg)',
                        }}></span>
                        <span className="close-button" style={{
                          transform: 'rotate(-45deg)',
                        }}></span>
                      </div>
                  </button>
                  <div className='circle-highlight'></div>
                </div>

                 <iframe
                 style={{
                  display: 'block',
                  margin: '0 auto',
                  width: '90%',
                  height: '100%',
                 }}
                 src={`${trailer.site === 'youtube' ? YOUTUBE_URL : DAILYMOTION_URL}${trailer.id}`}>
                 </iframe>
  
            </div>
          </>
        ) : null}
        </>
  )
}

export default TrailerModal