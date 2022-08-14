import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { capitalizeFirstLetter, getFirstNWords } from '../../utilities/utils'

const RelatedMedia = ({media}) => {
  const [show, setShow] = useState(false)
  const showMedia = (event) => {
    setShow(true)
  }

  const shownStyle = {
    display: 'block',
    opacity: 1,
    transition: 'opacity 0.5s ease-in-out',
    zIndex: 50,
    left: 0,
    bottom: '100%'
  }

  const hiddenStyle = {
    display: 'none',
    opacity: 0,
    zIndex: 50,
    left: 0,
    bottom: '100%'
  }
  return (
    <Link to={`/anime/${media.id}`}
    onMouseEnter={showMedia}
    onMouseLeave={() => setShow(false)}
    href='#' className='relative text-md hover:underline'>
        <span>{getFirstNWords(5,media.title.romaji)}...</span>
        <div className={`absolute ${show ? 'related-media-preview-open' : 'related-media-preview-closed'}`}
        // style={{
        //     display: show ? 'block' : 'none',
        //     zIndex: 50,
        //     left: 0,
        //     bottom: '100%',
        //     opacity: show ? '1' : '0',
        //     transition: 'opacity 0.3s ease-in-out',
        // }}
        // style={show ? shownStyle : hiddenStyle}
        >
            <div className='rounded flex flex-col shadow-xl' style={{
                backgroundColor: '#1e1e1e',
                width: '300px',
            }}>
                <div id="header" className='border-b-2 border-b-white'>
                    <h5 className='text-md text-left font-light pl-1'>{media.title.romaji}</h5>
                </div>

                <div className='flex flex-row' style={{
                    height: '150px',
                }}>
                    <img 
                    className='border-r-2 border-r-white border-b-2 border-b-white'
                    src={media.coverImage.medium} alt={media.title.romaji} style={{
                        height: '100%',
                        width: '120px'
                    }}/>
                    <div className='p-0.5 text-sm flex flex-col border-b-2 border-b-white'>
                        <p className='overflow-y-auto'>{media.description ? media.description : 'No description for this media.'}</p>
                    </div>

                </div>
                <div className='p-1 flex justify-between'>
                    <div className='pl-2 text-sm'>
                        <strong>Type: </strong><span>{capitalizeFirstLetter(media.type)}</span>
                    </div>
                    <div className='pr-2 text-sm'>
                        <strong>{media.type === "MANGA" ? 'Chapters': 'Episodes'}: </strong>
                        <span>{media.type === "MANGA" ? media.chapters || 'NA' : media.episodes || 'NA'}</span>
                    </div>
                </div>

            </div>
        </div>
    </Link>
  )
}

export default RelatedMedia