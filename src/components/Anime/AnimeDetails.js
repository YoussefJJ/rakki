import React from "react";
import AnimeDetailsContent from "./AnimeDetailsContent";

function AnimeDetails({
    format,
    duration,
    episodes,
    countryOfOrigin,
    status,
    externalLinks}) {
  return (
    <div
    className="relative text-white w-full h-auto bg-veryDarkPurple/90 mt-5 shadow-greenRecShadow-md border-2 border-black">
      <AnimeDetailsContent
      format={format}
      duration={duration}
      episodes={episodes}
      countryOfOrigin={countryOfOrigin}
      status={status}
      externalLinks={externalLinks}
      />
    </div>
  );
}

export default AnimeDetails;
