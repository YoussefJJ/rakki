import React from 'react'

function AnimePlot({plot}) {
  return (
    <>
      <h2 className='text-2xl font-bold text-brightPurple'>Plot:</h2>
      <div className="mt-2 text-sm text-white overflow-auto plot-container">
        <p className='plot'>{plot ? plot : 'No description found for this anime.'}</p>
      </div>
    </>
  )
}

export default AnimePlot