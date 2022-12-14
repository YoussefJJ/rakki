import React from 'react'
import AnimeDetails from './AnimeDetails'
import RecommendationsModal from '../Recommendations/RecommendationsModal'
import AnimeInfo from './AnimeInfo'
import AnimePlot from './AnimePlot'
import AnimeTitle from './AnimeTitle'
import TrailerModal from './TrailerModal'
import AnimeCover from './AnimeCover'
import AddToFavourite from './AddToFavourite'

export const AnimeContent = ({anime}) => {  
//   if loading {
//     return (
//         <div>Loading...</div>
//       )
//   }
  return (
    <div
    style={{
      height: '90%'
    }} 
    className="m-auto shadow-slate-500 bg-veryDarkPurple/80 px-3 py-4 sm:w-full overflow-hidden md:border-y-2 md:border-y-black ">
      <div className="flex flex-col md:flex-row anime-content" style={{
        height: "100%"
      }}>
        <div className="flex flex-col justify-center items-center p-4 md:w-2/5 flex-1 h-full">
          <AnimeCover anime={anime} />
          {/* <h1 className="text-white text-3xl text-center md:text-4xl md:text-left md:hidden font-bold p-3">{anime.title.romaji}</h1> */}
          <div className='flex flex-col items-center'>
            <AnimeTitle mobileScreen={true}>{anime.title.romaji}</AnimeTitle>
            {anime.title.english && anime.title.romaji !== anime.title.english && <AnimeTitle small mobileScreen={true}>{anime.title.english}</AnimeTitle>}
            <AddToFavourite id={anime.id} type={anime.type} mobileScreen/>
          </div>
          {/* General Info */}
          <AnimeDetails
            chapters={anime.chapters}
            volumes={anime.volumes}
            format={anime.format}
            status={anime.status}
            duration={anime.duration}
            episodes={anime.episodes}
            countryOfOrigin={anime.countryOfOrigin}
            externalLinks={anime.externalLinks}
          />
        </div>
        <div className="flex flex-col justify-start px-5 py-4 md:w-2/3 space-y-1 h-full bg-veryDarkPurple/60 border-2 border-brightGreen">
        <div className='flex justify-between items-center space-x-2'>
          <div>
            <AnimeTitle mobileScreen={false}>{anime.title.romaji}</AnimeTitle>
            {anime.title.english && anime.title.romaji !== anime.title.english && <AnimeTitle small mobileScreen={false}>{anime.title.english}</AnimeTitle>}
          </div>
          <AddToFavourite mobile id={anime.id} type={anime.type} mobileScreen={false}/>
        </div>
          {/* <h1 className="hidden md:block text-white text-2xl text-center md:text-4xl md:text-left font-bold">{anime.title.romaji}</h1> */}
          <div className='flex flex-col h-2/3'>
            <AnimePlot plot={anime.description}/>
            <div className="flex flex-col items-start mt-3 2xl:mt-18">
              <AnimeInfo infoTitle={'Genres'}>{anime.genres.map(genre => genre).join(', ')}</AnimeInfo>
              {anime.type === 'ANIME' && <AnimeInfo infoTitle={'Studios'}>{anime.studios.edges.filter(studio => studio.node.isAnimationStudio === true).map(studio => studio.node.name).join(', ')}</AnimeInfo>}
              <AnimeInfo infoTitle={'Original Run'}>{anime.originalRun}</AnimeInfo>
            </div>
          </div>
          <div className='flex justify-center p-3 min-h-1/5' style={{
            marginTop: 'auto'
          }}>
            <div className='self-end'>
              <div className='flex flex-col space-y-3 justify-between md:flex-row md:space-y-0 md:space-x-7'>
                {anime.trailer?
                (<TrailerModal mediaTitle={anime.title.romaji} trailer={anime.trailer}/>)
                : null}
                <RecommendationsModal from={anime}/>
              </div>
            </div>
          </div>
        </div>
        {/* <div className='flex flex-col items-start p-1'>
          <span className='hidden text-4xl text-green-500 font-bold md:block'>{anime.averageScore}</span>
        </div> */}
      </div>
    </div>
  )
}

export default AnimeContent