import { motion } from 'framer-motion';
import { useLoyalty } from '../context/LoyaltyContext';
import { format } from 'date-fns';

const PointsHistory = () => {
  const { state } = useLoyalty();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-lg p-6"
    >
      <h3 className="font-playfair text-2xl mb-6">Points History</h3>

      <div className="space-y-4">
        {state.purchases.slice().reverse().map((purchase, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex justify-between items-center border-b pb-4"
          >
            <div>
              <p className="font-poppins font-medium">
                {purchase.type === 'earned' ? 'Points Earned' : `Redeemed: ${purchase.reward}`}
              </p>
              <p className="text-sm text-gray-600">
                {format(new Date(purchase.date), 'MMM d, yyyy h:mm a')}
              </p>
            </div>
            <span className={`font-medium ${
              purchase.type === 'earned' ? 'text-green-600' : 'text-red-600'
            }`}>
              {purchase.type === 'earned' ? '+' : ''}{purchase.points}
            </span>
          </motion.div>
        ))}

        {state.purchases.length === 0 && (
          <p className="text-center text-gray-500">No points history yet</p>
        )}
      </div>
    </motion.div>
  );
};

export default PointsHistory;