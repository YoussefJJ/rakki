import { useQuery } from '@apollo/client'
import React from 'react'
import { useState } from 'react'
import { GET_MEDIA_LIST_BY_IDS } from '../../graphql/queries'
import Favourite from './Favourite'

const FavouritesList = ({ list }) => {

  return (
    <div className='grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-8 gap-y-12 my-4 w-full'>
        {list && list.map((item) => (
            <Favourite key={item.id} media={item} />
        ))}
    </div>
  )
}

export default FavouritesList