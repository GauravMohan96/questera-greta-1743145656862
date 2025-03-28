import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { FiClock, FiUsers, FiCalendar } from 'react-icons/fi';

const ReservationSummary = ({ space, time, duration, onConfirm }) => {
  if (!space || !time || !duration) return null;

  const total = space.pricePerHour * duration;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-md p-6"
    >
      <h3 className="font-playfair text-2xl mb-6">Reservation Summary</h3>

      <div className="space-y-4 mb-6">
        <div className="flex items-center">
          <FiUsers className="text-cafe-brown mr-2" />
          <div>
            <p className="font-medium">{space.name}</p>
            <p className="text-sm text-gray-600">Capacity: {space.capacity}</p>
          </div>
        </div>

        <div className="flex items-center">
          <FiCalendar className="text-cafe-brown mr-2" />
          <div>
            <p className="font-medium">
              {format(time.date, 'EEEE, MMMM d, yyyy')}
            </p>
            <p className="text-sm text-gray-600">{time.time}</p>
          </div>
        </div>

        <div className="flex items-center">
          <FiClock className="text-cafe-brown mr-2" />
          <p className="font-medium">{duration} hour{duration > 1 ? 's' : ''}</p>
        </div>
      </div>

      <div className="border-t pt-4">
        <div className="flex justify-between items-center mb-4">
          <span>Rate per hour</span>
          <span>${space.pricePerHour.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center mb-4">
          <span>Duration</span>
          <span>{duration} hour{duration > 1 ? 's' : ''}</span>
        </div>
        <div className="flex justify-between items-center text-lg font-medium">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      <button
        onClick={onConfirm}
        className="w-full mt-6 bg-cafe-brown text-cream py-3 rounded-md hover:bg-warm-gray transition-colors"
      >
        Confirm Reservation
      </button>
    </motion.div>
  );
};

export default ReservationSummary;