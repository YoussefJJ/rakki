import React, { useState } from 'react'

function AnimeTitle({small = false, mobileScreen = false, children}) {
  if (!mobileScreen) 
  return (
    <>
      {!small && <h1 className="hidden md:block text-white text-2xl text-center md:text-4xl md:text-left font-bold">{children}</h1>}
      {small && <h5 className="hidden md:block text-gray-200 text-md text-center md:text-md md:text-left font-medium">{children}</h5>}
    </>
  );
  else 
  return (
    <>
      {!small && <h1 className="text-white text-3xl text-center md:text-4xl md:text-left md:hidden font-bold p-3">{children}</h1>}
      {small && <h5 className='text-gray-200 text-xl text-center md:text-xl md:text-left md:hidden font-medium p-3'>{children}</h5>}
    </>
    )
  }

export default AnimeTitle