import { useMemo, useState } from 'react';
import { useGetUsersQuery } from '../graphql/__generated__/graphql';
import { useGraphQlClient } from './useGraphQlClient';

const useUserStore = () => {
  const [user_id, setUserId] = useState<number>(0);
  const { data: userData } = useGetUsersQuery({ client: useGraphQlClient() });

  useMemo(() => {
    const newUserId = userData?.users[2]?.id ?? 0;
    if (newUserId !== user_id) {
      setUserId(newUserId); //TODO get from db after authorization and keep it in store for example "zustand"
    }
  }, [userData?.users, user_id]);

  return {
    user_id,
  };
};

export default useUserStore;
