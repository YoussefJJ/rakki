import React from 'react'

function AnimePlot({plot}) {
  return (
    <div className='space-y-3'>
        <h2 className='text-1xl font-bold text-gray-400'>Plot</h2>
        <p className="text-white text-sm">{plot ? plot : 'No description found for this anime.'}</p>
    </div>
  )
}

export default AnimePlot