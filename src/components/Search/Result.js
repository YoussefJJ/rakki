import React from 'react'

const Result = ({ media }) => {
  return (
    <div 
    className={`group w-full flex space-x-2 border-l-4 border-l-brightGreen \\
    hover:border-l-white pr-2 hover:text-white hover:bg-brightGreen \\
    transition-all ease-in`} style={{
        height: '10vh',
    }}>
        <img src={media.coverImage.large} style={{
            height: 'auto',
            width: '60px',
            paddingLeft: '5px',
            paddingLeft: '5px',
        }}/>
        <div className='flex flex-col w-full'>
            <h1 className='text-md text-brightGreen line-clamp-1 font-bold group-hover:text-white'>{media.title.romaji}</h1>
        </div>
    </div>
  )
}

export default Result