import { gql } from "@apollo/client";

export const LIST_QUERY = gql`
  query CharactersList($page: Int) {
    characters(page: $page) {
      results {
        id
        image
        name
      }
      info {
        count
        pages
      }
    }
  }
`;

export const DETAIL_QUERY = gql`
  query CharacterDetails($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      type
      gender
      origin {
        name
      }
      location {
        name
      }
      episode {
        name
        episode
        air_date
      }
      image
      created
    }
  }
`;
