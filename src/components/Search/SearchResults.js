import React from 'react'
import Result from './Result'

const SearchResults = ({ children, results }) => {
  return (
    <div 
    className='h-full w-full results'>
        <h1 className='text-brightGreen text-2xl font-bold tracking-wider text-left mb-4'>{children}</h1>
        <div className='w-full flex flex-col space-y-2 overflow-y-auto'>
            {results.length > 0 ? results.map((result, index) => {
                return (
                    <Result key={index} media={result}/>
                )}
            ): <h1 className='text-brightGreen text-lg mt-4 font-bold tracking-wider text-left'>No results found</h1>}
        </div>
    </div>
  )
}

export default SearchResults