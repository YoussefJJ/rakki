import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react'
import { Link, Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import { GET_MEDIA_LIST } from '../../graphql/queries';
import { getRandomInt } from '../../utilities/utils'

const RandomMedia = ({ type }) => {
  const navigate = useNavigate()
  const [randomPage, setRandomPage] = useState(1);
  const [animeNumber, setAnimeNumber] = useState(1);
  const [animeList, setAnimeList] = useState([]);

  useEffect(() => {
    const getRandomMedia = () => {
        const min = 0;
        const max = 100;
        const randomPage = getRandomInt(min, max, 1)
        const randomId = getRandomInt(0, 49, 1)
        setRandomPage(randomPage);
        setAnimeNumber(randomId);
      }
    getRandomMedia()
  }, [])
  
  const {data, loading, error} = useQuery(GET_MEDIA_LIST, {
    variables: {
        page: randomPage,
        type: type
    },
    onCompleted: (data) => {
        console.log(data)
        let number = getRandomInt(0, data.Page.media.length, 1)
        const animeId = data.Page.media[number].id
        navigate(`/anime/${animeId}`)
        // setAnimeList(data.Page.media)
    },
    onError: (error) => {
        console.log(error)
    }
  })

//   const animeId = animeList?.[animeNumber]?.id || 1;

  if (loading) {
    return <div>Loading...</div>
  }

  return (<></>
    // <Link to={`/anime/${animeId}`}>Go to Anime</Link>
    // <div>{animeList.map(anime => <div>{anime.title.romaji}</div>)}</div>
  )
}

export default RandomMedia