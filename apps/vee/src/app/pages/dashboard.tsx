import { useGetUsersQuery } from "../../graphql/__generated__/graphql";
import { useGraphQlClient } from "../../hooks/useGraphQlClient";
import GrantCard from "../components/grant-card";
import GrantsTable from "../components/grants-table";

const GrantDashboard = () => {
  const newMatches = [
    { icon: 'heart', title: 'Robinson Foundation Grant', organization: 'Robinson Foundation', amount: '$25,000', deadline: 'January 1st' },
    { icon: 'eye', title: 'Looking Out', organization: 'Looking Out Foundation', amount: '$500,000', deadline: 'February 1st' },
    { icon: 'award', title: 'Dribble Foundation Grant', organization: 'Dribble Foundation', amount: '$75,000', deadline: 'February 1st' },
    { icon: 'wallet', title: 'Wahi wako Foundation Grant', organization: 'Wahi wako Foundation', amount: '$145,000', deadline: 'February 1st' },
  ];

  const allGrants = [
    { foundation: 'Robinson Foundation', name: 'Robinson Foundation Grant', amount: '$25,000', status: 'Applied', deadline: 'January 1st', matchDate: '23 December 2024' },
    { foundation: 'Looking Out Foundation', name: 'Looking Out Foundation', amount: '$500,000', status: 'Saved', deadline: 'February 1st', matchDate: '24 December 2024' },
    { foundation: 'Dribble Foundation', name: 'Dribble Foundation Grant', amount: '$75,000', status: 'Matched', deadline: 'February 1st', matchDate: '25 December 2024' },
    { foundation: 'Wahi Foundation', name: 'Wahi wako Foundation Grant', amount: '$145,000', status: 'Saved', deadline: 'February 1st', matchDate: '26 December 2024' },
  ];

  const { data } = useGetUsersQuery({client: useGraphQlClient()});
  console.log({ data });

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-6">New Matches</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {newMatches.map((match, index) => (
          <GrantCard key={index} {...match} />
        ))}
      </div>
      <h2 className="text-2xl font-bold mb-6">All Grant Opportunities</h2>
      <GrantsTable grants={allGrants} />
    </div>
  );
};

export default GrantDashboard;
