import { useState } from 'react';
import { Heart, Eye, Award, Wallet, ThumbsUp, ThumbsDown } from 'lucide-react';
import { formatNumber } from '../utils/utils';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@vee-shared';
import { Button } from '@vee-shared';
import { Textarea } from '@vee-shared';
import { useOnSubmitMutationMutation } from '../../graphql/__generated__/graphql';
import { useGraphQlClient } from '../../hooks/useGraphQlClient';
import useUserStore from '../../hooks/useUserStore';

const GrantCard = ({
  icon,
  name,
  foundation,
  amount,
  deadline,
  location,
  areas,
  id,
  refetchAll,
  user_id,
}: any) => {
  // const { user_id } = useUserStore();
  const [feedbackType, setFeedbackType] = useState<'up' | 'down' | null>(null);
  const [feedbackText, setFeedbackText] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleFeedback = (type: 'up' | 'down') => {
    setFeedbackType(type);
    setIsDialogOpen(true);
  };

  const [onSubmitMutation] = useOnSubmitMutationMutation({
    client: useGraphQlClient(),
  });

  const handleSubmitFeedback = async () => {
    const object = {
      feedback: feedbackText,
      grant_id: id,
      user_id,
      relevant: feedbackType === 'up',
    };

    try {
      await onSubmitMutation({
        variables: { object, id, interacted_users_ids: [user_id] },
      });

      setIsDialogOpen(false);
      setFeedbackText('');
      refetchAll();
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  };
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center ${
            icon === 'heart'
              ? 'bg-red-100'
              : icon === 'eye'
                ? 'bg-yellow-100'
                : icon === 'award'
                  ? 'bg-purple-100'
                  : 'bg-blue-100'
          }`}
        >
          {icon === 'heart' && <Heart className="text-red-500" />}
          {icon === 'eye' && <Eye className="text-yellow-500" />}
          {icon === 'award' && <Award className="text-purple-500" />}
          {icon === 'wallet' && <Wallet className="text-blue-500" />}
        </div>
        <div className="flex space-x-2">
          <button
            className="text-gray-400 hover:text-gray-600"
            onClick={() => handleFeedback('up')}
          >
            <ThumbsUp className="h-5 w-5" />
          </button>
          <button
            className="text-gray-400 hover:text-gray-600"
            onClick={() => handleFeedback('down')}
          >
            <ThumbsDown className="h-5 w-5" />
          </button>
        </div>
      </div>
      <h3 className="font-semibold text-lg mb-1">{name}</h3>
      <p className="text-sm text-gray-500 mb-4">{foundation}</p>
      <div className="flex-col justify-between items-center mb-4">
        <p className="font-bold text-xl">{formatNumber(amount)}</p>
        <p className="text-sm text-gray-500">Avg Amount</p>
      </div>
      <div className="text-sm text-gray-500 mb-4">
        <p>Deadline: {deadline}</p>
      </div>
      <div className="flex-col text-sm mb-2">
        <span className="text-sm mb-4">Location</span>
        <p className="text-sm text-gray-500 mb-4">{location}</p>
      </div>
      <div className="flex-col mb-4">
        <span className="text-sm mb-2">Areas</span>
        <div>
          {areas.map((area: string, index: number) => (
            <span
              key={index}
              className="bg-gray-100 px-4 py-1 mx-1 rounded-full text-xs"
            >
              {area}
            </span>
          ))}
        </div>
      </div>
      <button className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition duration-300">
        Apply Now
      </button>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-gray-100 opacity-100">
          <DialogHeader>
            <DialogTitle>Provide Feedback</DialogTitle>
          </DialogHeader>
          <Textarea
            value={feedbackText}
            onChange={(e) => setFeedbackText(e.target.value)}
            placeholder="Enter your feedback here..."
            className="mt-2"
          />
          <DialogFooter>
            <Button
              className="border rounded-lg"
              onClick={handleSubmitFeedback}
            >
              Submit Feedback
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default GrantCard;
