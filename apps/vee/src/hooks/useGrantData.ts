import { useCallback } from 'react';
import {
  useGetNotInteractedGrantsQuery,
  useGetRelevantUserGrantsQuery,
} from '../graphql/__generated__/graphql';
import { useGraphQlClient } from './useGraphQlClient';

export const useGrantData = (userId: number) => {
  const client = useGraphQlClient();

  const { data: notInteractedGrants, refetch: refetchNotInteracted } =
    useGetNotInteractedGrantsQuery({
      client,
      variables: {
        users_ids: [userId],
      },
    });

  const { data: userGrants, refetch: refetchUserGrants } =
    useGetRelevantUserGrantsQuery({
      client,
      variables: {
        user_id: userId,
      },
    });

  const refetchAll = useCallback(async () => {
    await Promise.all([refetchNotInteracted(), refetchUserGrants()]);
  }, [refetchNotInteracted, refetchUserGrants]);

  return { notInteractedGrants, userGrants, refetchAll };
};

export default useGrantData;
