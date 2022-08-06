import { useLazyQuery, useQuery } from "@apollo/client";
import React, { useState, useEffect } from "react";
import { GET_RECOMMENDATIONS } from "../graphql/queries";
import Modal from "./Modal/Modal";
import Recommendation from "./Recommendations/Recommendation";
import Spinner from "./Spinner/Spinner";

export const RecommendationsModal = ({ from }) => {

  const processRecommendations = (data) => {
    const recommendations = data.Media.recommendations.edges.map(
      (recommendation) => {
        return recommendation.node.mediaRecommendation;
      }
    );
    return recommendations;
  };

  const [page, setPage] = useState(1)
  const [skip, setSkip] = useState(false);
  const [recommendations, setRecommendations] = useState([]);
  const { data, loading, error } = useQuery(GET_RECOMMENDATIONS, {
    variables: {
      id: from.id,
      perPage: 5,
      page: 1,
    },
    skip,
    onCompleted: (data) => {
      console.log(data);
      const recs = processRecommendations(data);
      console.log(recs);
      setRecommendations(recommendations.concat(recs));
    },
    onError: (error) => {
      console.log(error);
    },
  });

  useEffect(() => {
    if (!loading && !!data) {
      setSkip(true);
    }
  }, [data, loading])
  

  const [loadMore, {
    data: buttonClickData, 
    loading: buttonClickLoading, 
    error: buttonClickError
  }] = useLazyQuery(GET_RECOMMENDATIONS, {
    variables: {
      id: from.id,
      perPage: 5,
      page: page,
    },
    onCompleted: (data) => {
      console.log(data);
      const recs = processRecommendations(data);
      console.log(recs);
      setRecommendations(recommendations.concat(recs));
    }
  }, { fetchPolicy: "no-cache" });

  useEffect(() => {
    loadMore()
  }, [page])

  const handleLoadMore = () => {
    setPage(page + 1);
  }


  if (loading) return <p>Loading...</p>;
  return (
    <Modal modalTitle={`Anime like ${from.title.romaji}`} buttonText="Show Recommendations">
      <div className="flex flex-col items-center justify-center">
        <div
          className="flex flex-col w-full justify-center items-center px-1 space-y-3"
          style={{ maxWidth: "100%" }}
        >
          {recommendations.map((recommendation) => {
            return (
              <Recommendation data={recommendation}/>
            );
          })}
        </div>
        <div className="w-full">
          <button 
          className="w-full
          flex justify-center items-center
          p-5 text-white text-center bg-slate-600 font-bold
          text-2xl hover:bg-slate-500 shadow-md"
          onClick={handleLoadMore}>
            {buttonClickLoading ? (<Spinner/>): "Load more"}
          </button>
        </div>
        

      </div>
    </Modal>
  );
};

export default RecommendationsModal;
