import React, { useState } from 'react'

function AnimeTitle({language, children, mobileScreen}) {
  const [jp, setJp] = useState(false)
  if (!mobileScreen) 
  return (
    <h1 className="hidden md:block text-white text-2xl text-center md:text-4xl md:text-left font-bold">{children}</h1>
  );
  else 
  return (
    <h1 className="text-white text-3xl text-center md:text-4xl md:text-left md:hidden font-bold p-3">{children}</h1>
    )
  }

export default AnimeTitle