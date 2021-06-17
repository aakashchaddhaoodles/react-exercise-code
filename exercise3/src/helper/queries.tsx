import { gql } from "@apollo/client";

export const COUNTRY_INFO = gql`
  query Country($code: ID!) {
    country(code: $code) {
      name
      code
      emoji
      currency
      languages {
        name
      }
    }
  }
`;

export const CONTINENT_INFO = gql`
  query Continent($code: ID!) {
    continent(code: $code) {
      name
      code
      countries {
        code
        name
        emoji
      }
    }
  }
`;
