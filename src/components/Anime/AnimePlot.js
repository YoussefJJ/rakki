import React from 'react'
import { removeTags } from '../../utilities/utils'

function AnimePlot({plot}) {
  return (
    <>
      <h2 className='text-2xl 2xl:text-4xl font-bold text-brightPurple'>Plot:</h2>
      <div className="mt-2 text-sm 2xl:text-2xl text-white overflow-auto plot-container scroll-bar scrollbar-thin scrollbar-thumb-brightGreen scrollbar-track-veryDarkPurple active:scrollbar-thumb-darkGreen">
        <p className='plot pr-2'>{plot ? removeTags(plot) : 'No description found for this anime.'}</p>
      </div>
    </>
  )
}

export default AnimePlot