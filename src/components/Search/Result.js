import React from 'react'
import { Link } from 'react-router-dom'
import { getFormat } from '../../utilities/utils'

const Result = ({ media }) => {
  return (
    <Link 
    className='result'
    onClick={() => document.getElementById('search-modal').click()}
    to={
      media.type === 'ANIME' ? `/anime/${media.id}` : `/manga/${media.id}`
    }>
    <div className='border-black border-2'>
      <div 
      className={`group relative w-full flex space-x-2 border-l-4 bg-veryDarkPurple/70 border-l-brightGreen \\
      hover:border-l-white pr-2 hover:text-white \\
      transition-all ease-in`}>
        <div style={{
          height: '20vh'
        }}>
          <img src={media.coverImage.large} style={{
              height: '100%',
              width: '140px',
              paddingLeft: '5px',
              paddingLeft: '5px',
          }}/>
        </div>
          <div className='flex flex-col w-full justify-between'>
              <div className='flex flex-col'>
                <h1 className='text-md text-brightGreen line-clamp-1 font-bold group-hover:underline'>{media.title.romaji}</h1>
                {media.title.romaji !== media.title.english && <h1 className='text-xs text-brightGreen line-clamp-1 font-bold'>{media.title.english}</h1>}
                <p className='text-xs text-brightGreen'>{`${getFormat(media.format)} ${(media.chapters || media.episodes) ? 
                  `(${(media.episodes || media.chapters)} ${media.episodes ? 'episodes' : 'chapters'})`
                  : ''}`} 
                </p>
              </div>
              <div>
              <div>
              </div>
              </div>
          </div>
      </div>
    </div>
    </Link>
    // <div 
    // className='border-4 border-brightGreen' 
    // style={{
    //   height: '30vh',
    //   width: '25vh',
    // }}
    // >
    //   <img className='h-full w-full object-fit' src={media.coverImage.large} alt='image'/>
    // </div>
  )
}

export default Result