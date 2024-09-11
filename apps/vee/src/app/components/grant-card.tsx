import { Heart, Eye, Award, Wallet } from 'lucide-react';

const GrantCard = ({ icon, title, organization, amount, deadline }: any) => (
  <div className="bg-white rounded-lg shadow-md p-4 flex flex-col">
    <div className="flex justify-between items-center mb-4">
      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${icon === 'heart' ? 'bg-red-100' : icon === 'eye' ? 'bg-yellow-100' : icon === 'award' ? 'bg-purple-100' : 'bg-blue-100'}`}>
        {icon === 'heart' && <Heart className="text-red-500" />}
        {icon === 'eye' && <Eye className="text-yellow-500" />}
        {icon === 'award' && <Award className="text-purple-500" />}
        {icon === 'wallet' && <Wallet className="text-blue-500" />}
      </div>
      <div className="flex space-x-2">
        <button className="text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
          </svg>
        </button>
      </div>
    </div>
    <h3 className="font-semibold text-lg mb-1">{title}</h3>
    <p className="text-sm text-gray-500 mb-4">{organization}</p>
    <div className="flex justify-between items-center mb-4">
      <span className="font-bold text-xl">{amount}</span>
      <span className="text-sm text-gray-500">Avg Grant</span>
    </div>
    <div className="text-sm text-gray-500 mb-4">
      <p>Deadline: {deadline}</p>
    </div>
    <button className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition duration-300">Apply Now</button>
  </div>
);

export default GrantCard;
