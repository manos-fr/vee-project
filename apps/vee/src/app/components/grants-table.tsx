import { StatusEnum } from '@vee-shared';
import { formatNumber } from '../utils/utils';
import { Heart, Eye, Award, Wallet } from 'lucide-react';

const GrantTable = ({ userGrants }: { userGrants: any }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <div className="overflow-x-auto">
      <div className="inline-block min-w-full">
        <div className="overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                  Foundation name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                  Grant name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                  Average amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                  Deadline
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                  Match date
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {userGrants?.map((userGrant: Record<any, any>, index: number) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 mr-2">
                        {userGrant.grant.icon === 'heart' ? (
                          <Heart className="text-red-500" />
                        ) : userGrant.grant.icon === 'wallet' ? (
                          <Wallet className="text-gray-500" />
                        ) : userGrant.grant.icon === 'eye' ? (
                          <Eye className="text-yellow-500" />
                        ) : (
                          <Award className="text-blue-500" />
                        )}
                      </div>
                      <div>{userGrant.grant.foundation}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {userGrant.grant.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {formatNumber(userGrant.grant.amount)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        userGrant.grant.status === StatusEnum.Done
                          ? 'bg-green-100 text-green-800'
                          : userGrant.grant.status === StatusEnum.InProgress
                            ? 'bg-blue-100 text-orange-400'
                            : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {userGrant.grant.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {new Date(userGrant.grant.deadline)
                      ?.toDateString()
                      ?.slice(4)
                      ?.slice(0, 6)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {new Date(userGrant.grant.match_date).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
);

export default GrantTable;
