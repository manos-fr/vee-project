import { gql } from 'graphql-request';

export const getAllSomes = gql`
  query getAllSomes {
    somes {
      amount
      areas
      created_at
      deadline
      foundation
      id
      location
      match_date
      name
      status
      updated_at
    }
  }
`;
