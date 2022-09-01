import React from 'react'

const SearchBox = ({ onChange }) => {
  return (
    <input 
        type="text" 
        autoFocus
        onChange={onChange}
        placeholder='Search anime or manga...'
        className={`w-4/5 outline-none border-2 placeholder:text-brightGreen\\
         border-brightGreen px-4 py-2 shadow-brightGreen bg-transparent text-brightGreen`}
    />
  )
}

export default SearchBox