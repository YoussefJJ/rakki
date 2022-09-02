import { gql } from "@apollo/client";

export const GET_MEDIA_LIST = gql`
    query GetMediaList($page: Int!, $type: MediaType!) {
        Page(perPage: 50, page: $page) {
            media(
              type: $type,
              status_not_in: NOT_YET_RELEASED, 
              format_not_in: [SPECIAL, MUSIC, TV_SHORT],
              sort: SCORE_DESC
              isAdult: false,
              averageScore_greater: 55
            ) {
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
              type
              averageScore
              coverImage {
                extraLarge
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

export const GET_MEDIA = gql`
    query GetAnime($id: Int!, $type: MediaType!) {
        Media(id: $id, type: $type) {
            id
            title {
                romaji
                english
                native
            }
            description
            coverImage {
                extraLarge
                large
                medium
            }
            chapters
            volumes
            type
            episodes
            format
            status
            duration
            averageScore
            genres
            siteUrl
            relations {
              nodes {
                id
                type
                chapters
                episodes
                title {
                  romaji
                  english
                }
                coverImage {
                  medium
                }
                description
              }
            }
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
            studios {
                edges {
                  node {
                    isAnimationStudio
                    name
                  }
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



export const GET_COVERS = gql`
  query getCovers($page: Int) {
  mangaPage: Page(page: $page, perPage: 50) {
    media(sort: POPULARITY_DESC, type: MANGA) {
      bannerImage
      title {
        romaji
        english
      }
    }
  }
  animePage: Page(page: $page, perPage: 50) {
    media(sort: POPULARITY_DESC, type: ANIME) {
      bannerImage
      title {
        romaji
        english
      }
    }
  }
}
`;

export const GET_MEDIA_LIST_BY_SEARCH_QUERY = gql`
query searchByName($search: String) {
  anime:Page {
    media(search: $search, sort: POPULARITY_DESC, type: ANIME, isAdult: false) {
      id
      title {
        romaji
        english
        native
        userPreferred
      }
      type
      format
      description
      episodes
      seasonYear
      season
      coverImage {
        large
      }
    }
  }
  manga:Page {
    media(search: $search, sort: POPULARITY_DESC, type: MANGA, isAdult: false) {
      id
      title {
        romaji
        english
        native
        userPreferred
      }
      description
      format
      chapters
      coverImage {
        large
      }
    }
  }
}
`;