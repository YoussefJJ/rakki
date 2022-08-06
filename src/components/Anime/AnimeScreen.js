import React, { useState } from "react";
import { GET_ANIME } from "../../graphql/queries";
import { useQuery } from "@apollo/client";
import { AnimeContent } from "./AnimeContent";
import { capitalizeEachFirstLetter, capitalizeFirstLetter, formatDate, getRegionName } from "../../utilities/utils";

function AnimeScreen() {
  const [anime, setAnime] = useState();
  const [bgImage, setBgImage] = useState(
    "https://www.solidbackgrounds.com/images/2560x1440/2560x1440-davys-grey-solid-color-background.jpg"
  );
  const { data, loading, error } = useQuery(GET_ANIME, {
    variables: {
      id: 16498,
    },
    onCompleted: (data) => {
      console.log(data);
      const animeData = processAnimeData(data);
      console.log(animeData);
      setAnime(animeData);
      setBgImage(data.Media.bannerImage || data.Media.coverImage.large);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  function processAnimeData(data) {
    const animeData = data.Media;

    const startDate = formatDate(
      animeData.startDate.year, 
      animeData.startDate.month, 
      animeData.startDate.day
    );
    const endDate = formatDate(
      animeData.endDate.year, 
      animeData.endDate.month, 
      animeData.endDate.day
    );


    const description = animeData.description.replace(/\<br\>/g, "\n");

    const externalLinks = animeData.externalLinks.filter(extLink => extLink.type === "STREAMING")

    const regionName = getRegionName(animeData.countryOfOrigin);
    
    const source = capitalizeEachFirstLetter(animeData.source.replace(/_/g, " "));

    const status = capitalizeFirstLetter(animeData.status);

    const recommendations = animeData.recommendations.edges.map(recommendation => 
      recommendation.node.mediaRecommendation
    )
    console.log(recommendations)
    return { ...animeData, startDate, status, endDate, description, externalLinks, countryOfOrigin: regionName, source, recommendations };
  }

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <>
      <div
        className="fixed bg-cover bg-no-repeat w-full h-screen top-0 left-0 -z-10"
        style={{ backgroundImage: `url('${bgImage}')` }}
      ></div>
      <div className="flex h-screen">
        <AnimeContent anime={anime} />
      </div>
    </>
  );
}

export default AnimeScreen;
