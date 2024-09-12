import { gql } from 'graphql-request';

export const getAllSomes = gql`
  query getAllSomes {
    somes {
      areas
      amount
    }
  }
`;
