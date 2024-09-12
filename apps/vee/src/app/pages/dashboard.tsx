import useUserStore from '../../hooks/useUserStore';
import GrantCard from '../components/grant-card';
import GrantsTable from '../components/grants-table';
import useGrantData from '../../hooks/useGrantData';
import { useGetAllSomesQuery } from '../../graphql/__generated__/graphql';
import { useGraphQlClient } from '../../hooks/useGraphQlClient';

const GrantDashboard = () => {
  const { user_id } = useUserStore();
  const { notInteractedGrants, userGrants, refetchAll } = useGrantData(user_id);

  /**
  This query hits the nestjs graphql api and resolvers through the hasura endpoint.
  The nestjs backend is integrated to hasura as a remote schema so a unified graphql api is generated on hasura to have (if wanted),
  a single url and place for all graphql queries.
  */
  const { data: somes } = useGetAllSomesQuery({ client: useGraphQlClient() });

  return (
    <div className="flex-1 bg-gray-100 min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-6">New Matches</h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {notInteractedGrants?.grants.map((match, index) => {
          return (
            <GrantCard key={match.id} refetchAll={refetchAll} {...match} />
          );
        })}
      </div>
      <h2 className="text-2xl font-bold mb-6">All Grant Opportunities</h2>
      <GrantsTable userGrants={userGrants?.users_grants} />
    </div>
  );
};

export default GrantDashboard;
