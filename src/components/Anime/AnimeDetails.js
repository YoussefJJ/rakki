import React from "react";

function AnimeDetails({
    format,
    duration,
    episodes,
    countryOfOrigin,
    status,
    externalLinks}) {
  return (
    <div className="text-white w-full bg-slate-700/90 mt-5 rounded p-4">
      {format ? (<div className="flex flex-wrap justify-between items-center">
        <strong>Format: </strong>
        <span className="text-sm text-gray-300">{format}</span>
      </div>): null }
      {duration ? (<div className="flex flex-wrap justify-between items-center">
        <strong>Duration: </strong>
        <span className="text-sm text-gray-300">
          {duration} mins
        </span>
      </div>): null}
      {episodes ? (<div className="flex flex-wrap justify-between items-center">
        <strong>Episodes: </strong>
        <span className="text-sm text-gray-300">
          {episodes} episodes
        </span>
      </div>): null}
      {countryOfOrigin ? (<div className="flex flex-wrap justify-between items-center">
        <strong>Country of Origin: </strong>
        <span className="text-sm text-gray-300">
          {countryOfOrigin}
        </span>
      </div>): null}
      {status ? (<div className="flex flex-wrap justify-between items-center">
        <strong>Status: </strong>
        <span className="text-sm text-gray-300">{status}</span>
        <div className="flex flex-wrap justify-between items-center w-full">
          <strong>Watch on: </strong>
          {externalLinks ? (<div className="flex justify-center">
            {externalLinks.map((extLink) => (
              <a href={extLink.url} className="mr-1 last:mr-0">
                <img
                  src={extLink.icon}
                  style={{ height: "16px", width: "16px" }}
                ></img>
              </a>
            ))}
          </div>): null}
        </div>
      </div>): null}
    </div>
  );
}

export default AnimeDetails;
