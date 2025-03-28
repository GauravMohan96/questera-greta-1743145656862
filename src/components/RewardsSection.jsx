import { motion } from 'framer-motion';
import { useLoyalty } from '../context/LoyaltyContext';
import { FiGift, FiCoffee, FiPackage } from 'react-icons/fi';

const RewardsSection = () => {
  const { state, dispatch } = useLoyalty();

  const handleRedeemReward = (reward) => {
    if (state.points >= reward.points) {
      dispatch({
        type: 'REDEEM_REWARD',
        payload: reward
      });
      alert(`Successfully redeemed: ${reward.name}`);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-lg p-6"
    >
      <h3 className="font-playfair text-2xl mb-6">Available Rewards</h3>

      <div className="grid gap-4">
        {rewards.map((reward) => (
          <div
            key={reward.id}
            className="border rounded-lg p-4 flex justify-between items-center"
          >
            <div className="flex items-center">
              <div className="text-cafe-brown mr-4">
                {reward.icon}
              </div>
              <div>
                <h4 className="font-poppins font-medium">{reward.name}</h4>
                <p className="text-sm text-gray-600">{reward.points} points</p>
              </div>
            </div>
            <button
              onClick={() => handleRedeemReward(reward)}
              disabled={state.points < reward.points}
              className={`
                px-4 py-2 rounded-md font-poppins text-sm transition-colors
                ${state.points >= reward.points
                  ? 'bg-cafe-brown text-cream hover:bg-warm-gray'
                  : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                }
              `}
            >
              Redeem
            </button>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const rewards = [
  {
    id: 1,
    name: 'Free Drink',
    points: 100,
    icon: <FiCoffee size={24} />,
  },
  {
    id: 2,
    name: 'Free Pastry',
    points: 80,
    icon: <FiPackage size={24} />,
  },
  {
    id: 3,
    name: 'Birthday Reward',
    points: 50,
    icon: <FiGift size={24} />,
  }
];

export default RewardsSection;