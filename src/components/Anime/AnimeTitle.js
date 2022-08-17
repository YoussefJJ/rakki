import React, { useState } from 'react'

function AnimeTitle({small = false, mobileScreen = false, children}) {
  if (!mobileScreen) 
  return (
    <div className='h-auto'>
      {!small && <h1 className="hidden md:block text-brightGreen text-2xl text-center md:text-4xl md:text-left font-bold">{children}</h1>}
      {small && <h5 className="hidden md:block text-darkGreen text-md text-center md:text-md md:text-left font-medium">{children}</h5>}
    </div>
  );
  else 
  return (
    <div className='h-auto'>
      {!small && <h1 className="text-brightGreen text-3xl text-center md:text-4xl md:text-left md:hidden font-bold p-3">{children}</h1>}
      {small && <h5 className='text-darkGreen text-xl text-center md:text-xl md:text-left md:hidden font-medium p-3'>{children}</h5>}
    </div>
    )
  }

export default AnimeTitle