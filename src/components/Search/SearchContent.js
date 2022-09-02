import { useLazyQuery } from '@apollo/client'
import React, { useState } from 'react'
import { GET_MEDIA_LIST_BY_SEARCH_QUERY } from '../../graphql/queries'
import SearchBox from './SearchBox'
import SearchLoading from './SearchLoading'
import SearchResults from './SearchResults'

const SearchContent = ({ onClose }) => {
    const [searchTimeout, setSearchTimeout] = useState(null)
    const [searchQuery, setSearchQuery] = useState('')
  //   const []
  
    const [search, {data, loading, error}] = useLazyQuery(GET_MEDIA_LIST_BY_SEARCH_QUERY)
  
    const handleSearch = (e) => {
      if (searchTimeout) {
          clearTimeout(searchTimeout)
          setSearchTimeout(null)
      }
      if (e.target.value.trim().length > 0) {
          setSearchQuery(e.target.value)
          const timeout = setTimeout(() => {
              search({
                  variables: {
                      search: e.target.value
                  },
                  onCompleted: (data) => {
                      console.log(data)
                  }
              })
          }, 1000)
          setSearchTimeout(timeout)
      }
    }

  return (
    <div className='flex flex-col justify-between items-center w-11/12 mx-auto'>
        <div className='search-input w-4/5 flex justify-center items-center' style={{
            minHeight: '33.3333vh'
        }}>
            <SearchBox onChange={handleSearch}/>
        </div>
        {loading ? <SearchLoading/> : <div className='flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-8 w-full h-5/6'>
            { data && 
            (
            <>
                <SearchResults results={data.anime.media}>ANIME</SearchResults>
                <SearchResults results={data.manga.media}>MANGA</SearchResults>
            </>
            )}
        </div>}
    </div>
  )
}

export default SearchContent