import React from 'react'
import AnimeDetails from './AnimeDetails'
import Recommendation from './Recommendation'

export const Card = (props) => {  

//   if loading {
//     return (
//         <div>Loading...</div>
//       )
//   }
  return (
    <div className="m-auto shadow-slate-500 bg-slate-600/80 px-3 py-4 sm:w-full">
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col justify-center items-center p-4 md:w-2/5">
          <img src={props.anime.coverImage.large} alt="anime" className="rounded" />
          <h1 className="text-white text-3xl text-center md:text-4xl md:text-left md:hidden font-bold p-3">{props.anime.title.romaji}</h1>
          {/* General Info */}
          <AnimeDetails
            format={props.anime.format}
            status={props.anime.status}
            duration={props.anime.duration}
            episodes={props.anime.episodes}
            countryOfOrigin={props.anime.countryOfOrigin}
            externalLinks={props.anime.externalLinks}
          />
        </div>
        <div className="flex flex-col px-5 py-4 md:w-2/3 space-y-3">
          <h1 className="hidden md:block text-white text-2xl text-center md:text-4xl md:text-left font-bold">{props.anime.title.romaji}</h1>
          <div className='flex flex-col justify-between'>
            <div className='space-y-3'>
              <h2 className='text-1xl font-bold text-gray-400'>Plot</h2>
              <p className="text-white text-sm">{props.anime.description}</p>
            </div>
            <div className="flex flex-col justify-between">
              <strong className='text-gray-400'>Genres: </strong><span className="text-sm text-gray-300">{props.anime.genres.map(genre => genre).join(', ')}</span>
              <strong className='text-gray-400'>Studios: </strong><span className="text-sm text-gray-300">{props.anime.studios.nodes.map(studio => studio.name).join(', ')}</span>
              <strong className='text-gray-400'>Original Run: </strong><span className="text-sm text-gray-300">{props.anime.startDate} - {props.anime.endDate}</span>
              {/* <strong className='text-gray-400'>Recommendations: </strong><span className="text-sm text-gray-300">
                <div className='flex flex-row items-center justify-between'>
                  {props.anime.recommendations.map(recommendation => (
                    <div className='flex flex-col items-center mt-2'>
                      <img src={recommendation.coverImage.medium} alt="anime" className="rounded" />
                      <p className="text-sm text-gray-300">{recommendation.title.romaji}</p>
                    </div>
                  ))}
                </div>
              </span> */}
            </div>
          </div>
          <div className='flex flex-col-reverse items-start justify-center m-auto p-5 h-full'>
            <div className='self-end'>
              <Recommendation from={props.anime}/>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-start p-1'>
          <span className='hidden text-4xl text-green-500 font-bold md:block'>{props.anime.averageScore}</span>
        </div>
      </div>
    </div>
  )
}

export default Card