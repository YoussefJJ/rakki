import { gql } from "@apollo/client";

export const GET_ANIME_LIST = gql`
    query GetAnimeList {
        Page(perPage: 50) {
            media {
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
                    site
                    id
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
                studios {
                    nodes {
                        name
                    }
                }
                averageScore
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
                site
                id
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