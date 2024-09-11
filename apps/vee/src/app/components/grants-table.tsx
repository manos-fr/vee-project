const GrantTable = ({ grants }: {grants: any}) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <table className="w-full">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Foundation name</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Grant name</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Average amount</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Deadline</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Match date</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {grants.map((grant: Record<any, any>, index: number) => (
          <tr key={index}>
            <td className="px-6 py-4 whitespace-nowrap">{grant.foundation}</td>
            <td className="px-6 py-4 whitespace-nowrap">{grant.name}</td>
            <td className="px-6 py-4 whitespace-nowrap">{grant.amount}</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                grant.status === 'Applied' ? 'bg-green-100 text-green-800' :
                grant.status === 'Saved' ? 'bg-blue-100 text-blue-800' :
                'bg-gray-100 text-gray-800'
              }`}>
                {grant.status}
              </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">{grant.deadline}</td>
            <td className="px-6 py-4 whitespace-nowrap">{grant.matchDate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default GrantTable;
