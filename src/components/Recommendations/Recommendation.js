import React from 'react'
import RecContent from './RecContent'
import RecGenres from './RecGenres'
import RecImage from './RecImage'
import RecTitle from './RecTitle'

const Recommendation = ({
    data
}) => {
  const genres = data.genres.map(genre => genre).join(', ')
  return (
    <RecContent onClick>
        <RecTitle englishTitle={data.title.english} romajiTitle={data.title.romaji}/>
        <RecImage imageUrl={data.bannerImage ? data.bannerImage: data.coverImage.medium } altTitle={data.title.romaji}/>
        <RecGenres genres={genres}/>
    </RecContent>
  )
}

export default Recommendation