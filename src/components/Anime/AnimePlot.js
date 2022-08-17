import React from 'react'

function AnimePlot({plot}) {
  return (
    <>
      <h2 className='text-2xl font-bold text-brightPurple'>Plot:</h2>
      <div className="mt-2 text-sm text-white overflow-auto plot-container scroll-bar scrollbar-thin scrollbar-thumb-brightGreen scrollbar-track-veryDarkPurple active:scrollbar-thumb-darkGreen">
        <p className='plot pr-2'>{plot ? plot : 'No description found for this anime.'}</p>
      </div>
    </>
  )
}

export default AnimePlot