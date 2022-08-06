import React from 'react'
import { DAILYMOTION_URL, YOUTUBE_URL } from '../utilities/constants'
import Modal from './Modal/Modal'

const TrailerModal = ({
    mediaTitle,
    trailer
}) => {
  return (
    <Modal modalTitle={`${mediaTitle} Trailer`} buttonText="Watch Trailer">
        <div className="flex flex-col items-center justify-center">
        <div
          className="flex flex-col w-full justify-center items-center px-1 space-y-3"
          style={{ maxWidth: "100%" }}
        ></div>
            <div className='video-container m-0.5 p-0.5 aspect-video w-full'>
                <iframe className='absolute top-0 left-0 w-full h-full'
                src={`${trailer.site === 'youtube' ? YOUTUBE_URL : DAILYMOTION_URL}${trailer.id}`}>
                </iframe>
            </div>
        </div>
    </Modal>
  )
}

export default TrailerModal