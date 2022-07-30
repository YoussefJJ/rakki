import { useQuery } from "@apollo/client";
import React, {useState} from "react";
import { GET_RECOMMENDATIONS } from "../graphql/queries";

export const Recommendation = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [page, setPage] = useState(1);
  const [recommendations, setRecommendations] = useState([]);
  const { data, loading, error } = useQuery(GET_RECOMMENDATIONS, {
    variables: {
        id: props.from.id,
        perPage: 5,
        page: page
    },
    onCompleted:
        (data) => {
            console.log(data);
            const recs = processRecommendations(data);
            console.log(recs)
            setRecommendations(recommendations.concat(recs));
            // setPage(prevValue => prevValue + 1);
        },
    onError: error => {
        console.log(error);
    }
});

  const processRecommendations = (data) => {
    const recommendations = data.Media.recommendations.edges.map(recommendation => {
        return recommendation.node.mediaRecommendation;
    });
    return recommendations;
  }

  const handleClose = (event) => {
    if (event.target.id === 'modal')
      setShowModal(false);
  }


  if (loading) return <p>Loading...</p>;
  return (
    <>
      <button
        className="bg-blue-800 text-white active:bg-blue-900 font-bold uppercase text-md px-6 py-3 rounded-md shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Show Recommendations
      </button>
      {showModal ? (
        <>
          <div 
          onClick={handleClose}
          id="modal"
          className="fixed inset-0 bg-gray-700 overflow-y-auto bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            {/* Content */}
            <div 
            className="bg-white rounded max-w-full md:max-w-4/5 space-y-3 flex flex-col"
            style={{maxHeight: '90%'}}>
              {/* Header */}
              <div className="flex flex-row justify-between items-center p-2">
                <div className="flex justify-center w-full">
                  <h2 className="text-2xl md:text-3xl font-bold text-center">Header</h2>
                </div>
                <button className="h-6 w-6 cursor-pointer relative" onClick={() => setShowModal(false)}>
                  <span className="h-0.5 w-6 bg-black left-0 absolute" style={{
                    transform: 'rotate(45deg)',
                  }}></span>
                  <span className="h-0.5 w-6 bg-black left-0 absolute" style={{
                    transform: 'rotate(-45deg)',
                  }}></span>
                </button>
              </div>
              {/* Body */}
              <div className="overflow-y-auto w-full">
                <div className="flex flex-col w-full justify-center items-center px-1 space-y-5"
                style={{maxWidth: '100%'}}>
                  {recommendations.map(recommendation => {
                    return (
                      <div className="w-full inline-block object-cover">
                        <div className="rounded bg-gray-700 p-0.5">
                          <div 
                          className="bg-no-repeat bg-cover bg-center max-h-full max-w-full flex justify-center items-center py-2"
                          style={{
                          width: '5000px',
                          height: '200px',
                          backgroundImage: `url(${recommendation.bannerImage})`,
                        }}>
                          <h2 className="text-3xl text-gray-50 font-bold">{recommendation.title.romaji}</h2>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
              {/* footer */}
              <div>

              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export default Recommendation;