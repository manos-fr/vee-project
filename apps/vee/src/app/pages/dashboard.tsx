import {
  useGetNotInteractedGrantsQuery,
  useGetRelevantUserGrantsQuery,
  useGetUsersQuery,
} from '../../graphql/__generated__/graphql';
import { useGraphQlClient } from '../../hooks/useGraphQlClient';
import GrantCard from '../components/grant-card';
import GrantsTable from '../components/grants-table';

const GrantDashboard = () => {
  const { data: userData } = useGetUsersQuery({ client: useGraphQlClient() });
  const user_id = userData?.users[1].id ?? 2; //TODO get from db after authorization and keep it in store for example "zustand"

  const { data: userGrants } = useGetRelevantUserGrantsQuery({
    client: useGraphQlClient(),
    variables: {
      user_id,
    },
  });
  const { data: notInteractedGrants } = useGetNotInteractedGrantsQuery({
    client: useGraphQlClient(),
    variables: {
      users_ids: [user_id],
    },
  });

  console.log({ notInteractedGrants });

  return (
    <div className="flex-1 bg-gray-100 min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-6">New Matches</h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {notInteractedGrants?.grants.map((match, index) => {
          console.log({ match });

          return <GrantCard key={index} {...match} />;
        })}
      </div>
      <h2 className="text-2xl font-bold mb-6">All Grant Opportunities</h2>
      <GrantsTable userGrants={userGrants?.users_grants} />
    </div>
  );
};

export default GrantDashboard;
