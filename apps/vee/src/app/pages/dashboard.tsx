import {
  useGetNotInteractedGrantsQuery,
  useGetRelevantUserGrantsQuery,
} from '../../graphql/__generated__/graphql';
import { useGraphQlClient } from '../../hooks/useGraphQlClient';
import useUserStore from '../../hooks/useUserStore';
import GrantCard from '../components/grant-card';
import GrantsTable from '../components/grants-table';

const GrantDashboard = () => {
  const { user_id } = useUserStore();
  const { data: notInteractedGrants, refetch: refetchNotInteracted } =
    useGetNotInteractedGrantsQuery({
      client: useGraphQlClient(),
      variables: {
        users_ids: [user_id],
      },
    });

  const { data: userGrants, refetch: refetchUserGrants } =
    useGetRelevantUserGrantsQuery({
      client: useGraphQlClient(),
      variables: {
        user_id,
      },
    });

  const refetchAll = async () => {
    await refetchNotInteracted();
    await refetchUserGrants();
  };

  console.log('rendered');

  return (
    <div className="flex-1 bg-gray-100 min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-6">New Matches</h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {notInteractedGrants?.grants.map((match, index) => {
          return <GrantCard key={match.id} refetch={refetchAll} {...match} />;
        })}
      </div>
      <h2 className="text-2xl font-bold mb-6">All Grant Opportunities</h2>
      <GrantsTable userGrants={userGrants?.users_grants} />
    </div>
  );
};

export default GrantDashboard;
