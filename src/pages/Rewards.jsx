import { motion } from 'framer-motion';
import LoyaltyCard from '../components/LoyaltyCard';
import RewardsSection from '../components/RewardsSection';
import PointsHistory from '../components/PointsHistory';

const Rewards = () => {
  return (
    <div className="pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="font-playfair text-4xl md:text-5xl mb-4">Rewards Program</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Earn points with every purchase and enjoy exclusive rewards as a valued member of our community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="space-y-8">
              <LoyaltyCard />
              <RewardsSection />
            </div>
          </div>
          <div>
            <PointsHistory />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rewards;