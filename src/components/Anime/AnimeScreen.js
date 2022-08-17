import React, { useState } from "react";
import { GET_ANIME } from "../../graphql/queries";
import { useQuery } from "@apollo/client";
import { AnimeContent } from "./AnimeContent";
import { capitalizeEachFirstLetter, capitalizeFirstLetter, formatDate, formatStatus, getAnimeCover, getRegionName } from "../../utilities/utils";
import AnimeBackground from "./AnimeBackground";
import { useParams } from "react-router-dom";

function AnimeScreen() {
  const animeId = useParams().id || 1;
  const [anime, setAnime] = useState();
  const [bgImage, setBgImage] = useState(
    "https://www.solidbackgrounds.com/images/2560x1440/2560x1440-davys-grey-solid-color-background.jpg"
  );
  const { data, loading, error } = useQuery(GET_ANIME, {
    variables: {
      id: +animeId,
    },
    onCompleted: (data) => {
      console.log(data);
      const animeData = processAnimeData(data);
      console.log(animeData);
      setAnime(animeData);
      setBgImage(getAnimeCover(animeData));
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

    const originalRun = startDate + ' - ' + endDate 


    const description = animeData.description?.replace(/\<br\>/g, "\n");

    const externalLinks = animeData.externalLinks?.filter(extLink => extLink.type === "STREAMING")

    const regionName = getRegionName(animeData.countryOfOrigin);

    const relatedMedia = animeData.relations?.nodes?.filter(rel => rel.type === "ANIME" || rel.type === "MANGA");
    // const source = capitalizeEachFirstLetter(animeData.source.replace(/_/g, " "));

    const status = formatStatus(animeData.status);



    const recommendations = animeData.recommendations.edges.map(recommendation => 
      recommendation.node.mediaRecommendation
    )
    console.log(recommendations)
    return { ...animeData, relatedMedia, status, originalRun, description, externalLinks, countryOfOrigin: regionName, recommendations };
  }

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <>
      <AnimeBackground imageUrl={bgImage}/>
      <div className="flex md:h-screen">
        <AnimeContent anime={anime} />
      </div>
    </>
  );
}

export default AnimeScreen;
