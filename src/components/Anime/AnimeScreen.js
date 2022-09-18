import React, { useState } from "react";
import { GET_MEDIA } from "../../graphql/queries";
import { useQuery } from "@apollo/client";
import { AnimeContent } from "./AnimeContent";
import MediaError from "./MediaError";
import { formatDate, formatStatus, getAnimeCover, getRegionName } from "../../utilities/utils";
import AnimeBackground from "./AnimeBackground";
import { useParams } from "react-router-dom";
import RandomLoading from "../RandomMedia/RandomLoading";
import { useEffect } from "react";

function AnimeScreen({ type }) {
  const animeId = useParams().id || 1;
  const [anime, setAnime] = useState();
  const [bgImage, setBgImage] = useState(
    "https://www.solidbackgrounds.com/images/2560x1440/2560x1440-davys-grey-solid-color-background.jpg"
  );
  const { data, loading, error } = useQuery(GET_MEDIA, {
    variables: {
      id: +animeId,
      type: type
    },
    onCompleted: (data) => {
      const animeData = processAnimeData(data);
      setAnime(animeData);
      setBgImage(getAnimeCover(animeData));
    },
    onError: (error) => {
      console.log(error);
    },
  });

  useEffect(() => {
    if (anime)
      document.title = `${anime.title.romaji} | Rakki`
  }, [anime])

  function processAnimeData(data) {
    const animeData = data.Media;

    const startDate = formatDate(
      animeData.startDate.year, 
      animeData.startDate.month, 
      animeData.startDate.day
    ) || 'Unknown';

    const endDate = formatDate(
      animeData.endDate.year, 
      animeData.endDate.month, 
      animeData.endDate.day
    ) || 'Ongoing';

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
    return { ...animeData, relatedMedia, status, originalRun, description, externalLinks, countryOfOrigin: regionName, recommendations };
  }

  if (loading) 
    return <RandomLoading text={"Loading"}/>;
  if (error) 
    return (<MediaError error={error}/>);

  return (
    <>
      <AnimeBackground imageUrl={bgImage}/>
      <div className="flex md:h-[calc(100vh_-_80px)]">
        <AnimeContent anime={anime} />
      </div>
    </>
  );
}

export default AnimeScreen;
