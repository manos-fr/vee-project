import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { useMemo } from 'react';

export const useGraphQlClient = () => {
  const authLink = setContext(async (_, { headers }) => {
    return {
      headers: {
        ...headers,
        'x-hasura-admin-secret': 'jijikos',
      },
    };
  });

  const httpLink = createHttpLink({
    uri: 'http://localhost:8083/v1/graphql',
  });

  const splitLink = authLink.concat(httpLink);

  const client = useMemo(
    () =>
      new ApolloClient({
        link: splitLink,
        cache: new InMemoryCache(),
      }),
    [],
  );
  return client;
};
