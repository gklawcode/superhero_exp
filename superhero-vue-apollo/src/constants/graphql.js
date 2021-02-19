import gql from "graphql-tag";

export const SUPERHEROS_DB_QUERY = gql`
  query superheros {
      superheros {
          id
          name
          comics {
              available
          }
      }
  }
`;

export const SUPERHERO_QUERY = gql`
  query superhero($id: ID!) {
      superhero(id: $id) {
          name
          comics {
              items {
                  name
              }
          }
      }
  }
`;