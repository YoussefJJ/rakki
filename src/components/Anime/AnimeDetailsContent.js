import React from 'react'
import { getFormat } from '../../utilities/utils'

const AnimeDetailsContent = ({
    className,
    format,
    duration,
    episodes,
    countryOfOrigin,
    status,
    externalLinks
}) => {
  return (
    <div className="p-4">
      {format ? (<div className="flex flex-wrap justify-between items-center">
        <strong>Format: </strong>
        <span className="text-sm md:text-base text-gray-300">{getFormat(format)}</span>
      </div>): null }
      {duration ? (<div className="flex flex-wrap justify-between items-center">
        <strong>Duration: </strong>
        <span className="text-msm md:text-base text-gray-300">
          {duration} mins
        </span>
      </div>): null}
      {episodes ? (<div className="flex flex-wrap justify-between items-center">
        <strong>Episodes: </strong>
        <span className="text-md text-gray-300">
          {episodes}
        </span>
      </div>): null}
      {countryOfOrigin ? (<div className="flex flex-wrap justify-between items-center">
        <strong>Country of Origin: </strong>
        <span className="text-md text-gray-300">
          {countryOfOrigin}
        </span>
      </div>): null}
      {status ? (<div className="flex flex-wrap justify-between items-center">
        <strong>Status: </strong>
        <span className="text-md text-gray-300">{status}</span>
        <div className="flex flex-wrap justify-between items-center w-full">
        {externalLinks.length !== 0 ? (
          <>
            <strong>Watch on: </strong>
            <div className="flex justify-center">
              {externalLinks.map((extLink) => (
                <a target="_blank" href={extLink.url} className="mr-1 last:mr-0 hover:-translate-y-1">
                  <img
                    src={extLink.icon}
                    style={{ height: "16px", width: "16px" }}
                  ></img>
                </a>
              ))}
            </div>
          </>): null}
        </div>
      </div>): null}
    </div>
  )
}

export default AnimeDetailsContent