import { motion } from 'framer-motion';
import { useLoyalty } from '../context/LoyaltyContext';
import { FiCoffee, FiAward } from 'react-icons/fi';

const LoyaltyCard = () => {
  const { state } = useLoyalty();
  const punchesNeeded = 10;
  const currentPunches = Math.min(Math.floor(state.points / 10), punchesNeeded);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-lg p-6"
    >
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-playfair text-2xl">Digital Punch Card</h3>
        <div className="flex items-center text-cafe-brown">
          <FiAward className="mr-2" />
          <span className="font-poppins">{state.points} points</span>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-2 mb-6">
        {[...Array(punchesNeeded)].map((_, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className={`
              aspect-square rounded-full border-2 flex items-center justify-center
              ${index < currentPunches
                ? 'border-cafe-brown bg-cafe-brown text-cream'
                : 'border-gray-300'
              }
            `}
          >
            <FiCoffee size={20} />
          </motion.div>
        ))}
      </div>

      <p className="text-center text-gray-600 mb-4">
        {currentPunches === punchesNeeded
          ? "You've earned a free drink!"
          : `${punchesNeeded - currentPunches} more purchases until your free drink`
        }
      </p>

      <div className="text-sm text-gray-500">
        <p>• Earn 10 points for every drink purchase</p>
        <p>• Bonus points for featured drinks</p>
        <p>• Free drink reward at 100 points</p>
      </div>
    </motion.div>
  );
};

export default LoyaltyCard;