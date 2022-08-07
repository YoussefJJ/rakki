import React from 'react'
import { useNavigate } from 'react-router-dom'
import { getAnimeCover } from '../../utilities/utils'
import RecContent from './RecContent'
import RecGenres from './RecGenres'
import RecImage from './RecImage'
import RecTitle from './RecTitle'

const Recommendation = ({
    data
}) => {
  const navigate = useNavigate()
  const genres = data.genres.map(genre => genre).join(', ')
  return (
    <RecContent onClick={() => navigate(`/anime/${data.id}`)}>
        <RecTitle englishTitle={data.title.english} romajiTitle={data.title.romaji}/>
        <RecImage imageUrl={getAnimeCover(data)} altTitle={data.title.romaji}/>
        <RecGenres genres={genres}/>
    </RecContent>
  )
}

export default Recommendation