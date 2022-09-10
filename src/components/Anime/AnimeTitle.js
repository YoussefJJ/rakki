import React from 'react'

function AnimeTitle({small = false, mobileScreen = false, children}) {
  if (!mobileScreen) 
  return (
    <div className="max-h-14">
      {!small && <h1 title={children} className="hidden text-brightGreen text-md text-center md:text-lg md:text-left font-bold 2xl:text-2xl md:line-clamp-2">{children}</h1>}
      {small && <h1 title={children} className="hidden text-darkGreen text-base md:leading-5 text-center md:text-base md:text-left font-medium 2xl:text-2xl md:line-clamp-2">{children}</h1>}
    </div>
  );
  else 
  return (
    <div className='h-auto'>
      {!small && <h1 className="text-brightGreen text-xl text-center md:text-4xl md:text-left md:hidden font-bold p-3">{children}</h1>}
      {small && <h5 className='text-darkGreen text-lg text-center md:text-xl md:text-left md:hidden font-medium p-3'>{children}</h5>}
    </div>
    )
  }

export default AnimeTitle