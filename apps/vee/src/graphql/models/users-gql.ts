import { gql } from 'graphql-request';

export const getUsers = gql`
  query getUsers {
    users {
      email
      name
      id
    }
  }
`;
