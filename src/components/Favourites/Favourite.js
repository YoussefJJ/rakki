import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { capitalizeFirstLetter, removeTags } from '../../utilities/utils'

const Favourite = ({ media }) => {
  const [hoverTimeOut, setHoverTimeOut] = useState(null)
  const [hover, setHover] = useState(false)
  const [show, setShow] = useState(false)
  const [position, setPosition] = useState('top')
  const hoverRef = React.useRef(null)
  return (
    <Link
    to={`/${media.type.toLowerCase()}/${media.id}`}
    className={`favourite-item relative group bg-brightGreen h-full w-full border-2 border-black box-border`}
    onMouseEnter={(e) => {
      const rect = hoverRef.current.getBoundingClientRect()
      if (rect.y < 0) {
        setPosition('bottom')
      }
      setHoverTimeOut(setTimeout(() => {
        setShow(true)
      }, 500))
    }}
    onMouseLeave={() => {
      clearTimeout(hoverTimeOut)
      setShow(false)
    }}
    >
      <div className='absolute top-full w-full'>
        <h1 className='line-clamp-1 font-medium text-white text-xs p-1 text-center'>{media.title.romaji}</h1>
      </div>
      <div
      className='group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-300 ease-in-out' 
      style={{
        height: '100px',
        width: '100px',
      }}>
        <img src={media.coverImage.large} alt={media.title.romaji} className="w-full h-full object-cover"/>
      </div>
      <div 
      ref={hoverRef}
      className={`absolute ${position === 'top' ? 'bottom-full pb-3' : 'top-full pt-3'} left-0 ${show ? 'related-media-preview-open' : 'related-media-preview-closed'}`}>
            <div className='flex flex-col border-2 border-black bg-veryDarkPurple/70 backdrop-blur-sm shadow-greenRecShadow-sm' style={{
                width: '300px',
            }}>
                <div id="header" className='border-b-2 border-b-brightGreen'>
                    <h5 className='text-brightGreen text-md text-left pl-1 font-bold'>{media.title.romaji}</h5>
                </div>

                <div className='flex flex-row text-white' style={{
                    height: '150px',
                }}>
                    <img 
                    className='border-r-2 border-r-brightGreen border-b-2 border-b-brightGreen'
                    src={media.coverImage.large} alt={media.title.romaji} style={{
                        height: '100%',
                        width: '120px'
                    }}/>
                    <div className='p-1 pr-0.5 text-sm flex flex-col border-b-2 border-b-white'>
                        <p className='overflow-y-auto break-words'>{media.description ? removeTags(media.description) : 'No description for this media.'}</p>
                    </div>

                </div>
                <div className='p-1 flex justify-between text-white'>
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

export default Favourite