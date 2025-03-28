import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { FiClock, FiMapPin, FiUsers, FiX } from 'react-icons/fi';

const EventDetails = ({ event, onClose, onBook }) => {
  if (!event) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="bg-white rounded-lg shadow-md p-6"
    >
      <div className="flex justify-between items-start mb-6">
        <h3 className="font-playfair text-2xl">{event.title}</h3>
        <button
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <FiX size={20} />
        </button>
      </div>

      <div className="space-y-4 mb-6">
        <div className="flex items-center text-gray-600">
          <FiClock className="mr-2" />
          <span>{format(new Date(event.date), 'EEEE, MMMM d, yyyy')} at {event.time}</span>
        </div>
        
        <div className="flex items-center text-gray-600">
          <FiMapPin className="mr-2" />
          <span>{event.location}</span>
        </div>

        <div className="flex items-center text-gray-600">
          <FiUsers className="mr-2" />
          <span>{event.spotsLeft} spots remaining</span>
        </div>

        <p className="text-gray-600">{event.description}</p>

        {event.price > 0 && (
          <p className="font-medium text-cafe-brown">
            Ticket price: ${event.price.toFixed(2)}
          </p>
        )}
      </div>

      <button
        onClick={() => onBook(event)}
        disabled={event.spotsLeft === 0}
        className={`
          w-full py-3 rounded-md font-poppins transition-colors
          ${event.spotsLeft > 0
            ? 'bg-cafe-brown text-cream hover:bg-warm-gray'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }
        `}
      >
        {event.spotsLeft > 0 ? 'Book Now' : 'Sold Out'}
      </button>
    </motion.div>
  );
};

export default EventDetails;