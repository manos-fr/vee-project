import useUserStore from '../../hooks/useUserStore';
import GrantCard from '../components/grant-card';
import GrantsTable from '../components/grants-table';
import useGrantData from '../../hooks/useGrantData';
import {
  Somes,
  useGetAllSomesQuery,
  useGetUsersQuery,
} from '../../graphql/__generated__/graphql';
import { useGraphQlClient } from '../../hooks/useGraphQlClient';
import { useState } from 'react';

const GrantDashboard = () => {
  // const { user_id } = useUserStore();
  const { data: userData } = useGetUsersQuery({ client: useGraphQlClient() });
  const { notInteractedGrants, userGrants, refetchAll } = useGrantData(
    userData?.users[2]?.id ?? 0,
  );
  const [somesData, setSomesData] = useState<Somes[] | undefined>(undefined);
  /**
  This query hits the nestjs graphql api and resolvers through the hasura endpoint.
  The nestjs backend is integrated to hasura as a remote schema so a unified graphql api is generated on hasura to have (if wanted),
  a single url and place for all graphql queries.
  */
  const { refetch } = useGetAllSomesQuery({
    client: useGraphQlClient(),
    skip: true,
  });

  const getSomes = async () => {
    setSomesData((await refetch())?.data?.somes);
  };

  return (
    <div className="flex-1 bg-gray-100 min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-6">New Matches</h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {notInteractedGrants?.grants.map((match, index) => {
          return (
            <GrantCard
              key={match.id}
              refetchAll={refetchAll}
              user_id={userData?.users[2]?.id}
              {...match}
            />
          );
        })}
      </div>
      {/* Nestjs backend call */}
      <hr className="mb-3"></hr>
      <div className="flex flex-col">
        <label className="text-lg text-black font-bold ml-2">
          Get Somes (Nestjs BE call)
        </label>
        <button
          className="bg-blue-300 border rounded-xl hover:bg-blue-100 p-3 ml-2 w-fit inline-flex items-center justify-center"
          onClick={async () => await getSomes()}
        >
          {somesData ? 'Refresh' : 'Get Somes'}
        </button>
        {somesData && (
          <div>
            {somesData?.map((some, index) => {
              return (
                <div key={index}>
                  <p>Name: {some.name}</p>
                  <p>Amount: {some.amount}</p>
                  <p>Foundation: {some.foundation}</p>
                  <p>Location: {some.location}</p>
                  <p>Status: {some.status}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <hr className="mt-3"></hr>
      <h2 className="text-2xl font-bold mb-6">All Grant Opportunities</h2>
      <GrantsTable userGrants={userGrants?.users_grants} />
    </div>
  );
};

export default GrantDashboard;
