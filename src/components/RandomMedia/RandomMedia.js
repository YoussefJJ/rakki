import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react'
import {  useNavigate } from 'react-router-dom';
import { GET_MEDIA_LIST } from '../../graphql/queries';
import { capitalizeFirstLetter, getRandomInt } from '../../utilities/utils'
import RandomLoading from './RandomLoading';

const RandomMedia = ({ type }) => {
  const navigate = useNavigate()
  const [randomPage, setRandomPage] = useState(1);

  useEffect(() => {
    document.title = `Generating Random ${capitalizeFirstLetter(type)} | Rakki`
    const getRandomMedia = () => {
        const min = 0;
        const max = 100;
        const randomPage = getRandomInt(min, max, 1)
        const randomId = getRandomInt(0, 49, 1)
        setRandomPage(randomPage);
      }
    getRandomMedia()
  }, [])
  
  const {data, loading, error} = useQuery(GET_MEDIA_LIST, {
    variables: {
        page: randomPage,
        type: type
    },
    onCompleted: (data) => {
        let number = getRandomInt(0, data.Page.media.length, 1)
        const mediaId = data.Page.media[number].id
        if (type === 'ANIME')
          navigate(`/anime/${mediaId}`)
        else
          navigate(`/manga/${mediaId}`)
        // setAnimeList(data.Page.media)
    },
    onError: (error) => {
        console.log(error)
    }
  })

//   const animeId = animeList?.[animeNumber]?.id || 1;

  if (loading) {
    // return <div>Loading...</div>
    return <RandomLoading text={`Generating Random ${capitalizeFirstLetter(type)}`}/>
  }

  return (<></>
    // <Link to={`/anime/${animeId}`}>Go to Anime</Link>
    // <div>{animeList.map(anime => <div>{anime.title.romaji}</div>)}</div>
  )
}

export default RandomMedia