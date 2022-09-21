import React from 'react'
import { removeTags } from '../../utilities/utils'

function AnimePlot({anime}) {
  return (
    <>
      <strong className='2xl:text-2xl text-brightPurple'>Plot:</strong>
      <div className="mt-2 text-sm 2xl:text-2xl text-white overflow-auto plot-container scroll-bar scrollbar-thin scrollbar-thumb-brightGreen scrollbar-track-veryDarkPurple active:scrollbar-thumb-darkGreen">
        <p className='plot pr-2'>{anime.description ? removeTags(anime.description) : `No description found for this ${anime.type.toLowerCase()}.`}</p>
      </div>
    </>
  )
}

export default AnimePlot