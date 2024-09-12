import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  split,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { useMemo } from 'react';
import { getMainDefinition } from '@apollo/client/utilities';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';

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
  const link = 'http://localhost:8083/v1/graphql';

  const wsLink = new GraphQLWsLink(
    createClient({
      on: {
        connected: () => console.log('socket connected'),
        closed: () => console.log('socket closed'),
        error: (error) => console.log('error'),
      },
      url: `wss://${link}?.replaceAll('http://', '')}`,
      connectionParams: async () => {
        return {
          headers: {
            authorization: '',
          },
        };
      },
    }),
  );

  const splitLink = split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
      );
    },
    wsLink,
    authLink.concat(httpLink),
  );

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
