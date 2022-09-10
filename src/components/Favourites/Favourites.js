import React, { useState } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { MediaContext } from '../../contexts/store.context'
import FavouritesTab from './FavouritesTab'
import FavouritesList from './FavouritesList'
import { useQuery } from '@apollo/client'
import { GET_MEDIA_LIST_BY_IDS } from '../../graphql/queries'
import RandomLoading from '../RandomMedia/RandomLoading'


const Favourites = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [mediaData, setMediaData] = useState(null)
  const { medias, dispatch } = useContext(MediaContext)
  useEffect(() => {
  }, [])

  const [skip, setSkip] = useState(false)

  const { loading , data, error} = useQuery(GET_MEDIA_LIST_BY_IDS, {
    variables: {
      animeIds: medias.mediaList.anime,
      mangaIds: medias.mediaList.manga
    },
    skip,
    onCompleted: (data) => {
      console.log(data)
      setMediaData(data)
      setSkip(true)
    }
  })
  if (loading) return <RandomLoading text={'Loading'}/>
  return (
    <div className='w-full md:min-h-[calc(100vh_-_80px)] bg-veryDarkPurple overflow-hidden'>
      <div className='flex flex-col justify-between items-center w-11/12 mx-auto py-4'>
        <FavouritesTab onTabChange={(index) => setActiveTab(index)}/>
        <div style={{
          display: activeTab === 0 ? 'block' : 'none'
        }}>
          {mediaData && <FavouritesList list={mediaData.anime.media}/>}
        </div>
        <div 
        className=''
        style={{
          display: activeTab === 1 ? 'block' : 'none'
        }}>
          {mediaData && <FavouritesList list={mediaData.manga.media}/>}
        </div>
      </div>
    </div>
  )
}

export default Favourites