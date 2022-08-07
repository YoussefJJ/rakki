import { gql } from "@apollo/client";

export const GET_ANIME_LIST = gql`
    query GetAnimeList($page: Int!) {
        Page(perPage: 50, page: $page) {
            media(type: ANIME,status_not_in: NOT_YET_RELEASED, sort: POPULARITY_DESC, isAdult: false) {
                id
                title {
                    romaji
                    english
                    native
                }
                coverImage {
                    large
                    medium
                }
                averageScore
                bannerImage
            }
        }
    }
`;

export const GET_RECOMMENDATIONS = gql`
    query getRecommendations ($id: Int, $perPage: Int, $page: Int) {
    Media (id: $id) {
      id
      recommendations (sort: RATING_DESC, perPage: $perPage, page: $page) {
        edges {
          node {
            id
            mediaRecommendation {
              id
              genres
              averageScore
              coverImage {
                large
                medium
              }
              title {
                english
                romaji
              }
              bannerImage
            }
          }
        }
      }
    }
  }
`;

export const GET_ANIME = gql`
    query GetAnime($id: Int!) {
        Media(id: $id) {
            id
            title {
                romaji
                english
                native
            }
            description
            coverImage {
                large
            }
            episodes
            format
            status
            duration
            averageScore
            genres
            siteUrl
            trailer {
                id
                site
            }
            bannerImage
            startDate {
                year
                month
                day
            }
            endDate {
                year
                month
                day
            }
            studios(isMain: true) {
                nodes {
                    name
                }
            }
            source
            externalLinks {
                id
                site
                url
                type
                icon
            }
            popularity
            averageScore
            countryOfOrigin
            recommendations(sort: RATING_DESC, perPage: 5) {
                edges {
                  node {
                    id
                    mediaRecommendation {
                      title {
                        romaji
                        english
                        native
                        userPreferred
                      }
                      coverImage {
                        medium
                        color
                      }
                      id
                    }
                  }
                }
            }
        }
    }
`;