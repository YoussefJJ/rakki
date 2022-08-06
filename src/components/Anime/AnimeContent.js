import React from 'react'
import AnimeDetails from './AnimeDetails'
import RecommendationsModal from '../RecommendationsModal'
import AnimeInfo from './AnimeInfo'
import AnimePlot from './AnimePlot'
import AnimeTitle from './AnimeTitle'

export const AnimeContent = ({anime}) => {  
//   if loading {
//     return (
//         <div>Loading...</div>
//       )
//   }
  return (
    <div className="m-auto shadow-slate-500 bg-slate-600/80 px-3 py-4 sm:w-full">
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col justify-center items-center p-4 md:w-2/5">
          <img src={anime.coverImage.large} alt="anime" className="rounded" />
          {/* <h1 className="text-white text-3xl text-center md:text-4xl md:text-left md:hidden font-bold p-3">{anime.title.romaji}</h1> */}
          <AnimeTitle mobileScreen={true} language="en">{anime.title.romaji}</AnimeTitle>
          {/* General Info */}
          <AnimeDetails
            format={anime.format}
            status={anime.status}
            duration={anime.duration}
            episodes={anime.episodes}
            countryOfOrigin={anime.countryOfOrigin}
            externalLinks={anime.externalLinks}
          />
        </div>
        <div className="flex flex-col justify-start px-5 py-4 md:w-2/3 space-y-3">
        <AnimeTitle mobileScreen={false} language="en">{anime.title.romaji}</AnimeTitle>
          {/* <h1 className="hidden md:block text-white text-2xl text-center md:text-4xl md:text-left font-bold">{anime.title.romaji}</h1> */}
          <div className='flex flex-col justify-between'>
            <AnimePlot plot={anime.description}/>
            <div className="flex flex-col justify-between grow">
              <AnimeInfo infoTitle={'Genres'} infoContent={anime.genres.map(genre => genre).join(', ')} />
              <AnimeInfo infoTitle={'Studios'} infoContent={anime.studios.nodes.map(studio => studio.name).join(', ')} />
              <AnimeInfo infoTitle={'Original Run'} infoContent={`${anime.startDate} - ${anime.endDate}`} />
            </div>
          </div>
          <div className='flex justify-center p-5 grow'>
            <div className='self-end'>
              <RecommendationsModal from={anime}/>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-start p-1'>
          <span className='hidden text-4xl text-green-500 font-bold md:block'>{anime.averageScore}</span>
        </div>
      </div>
    </div>
  )
}

export default AnimeContent