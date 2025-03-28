import { useState } from 'react';
import { motion } from 'framer-motion';
import { useSpace } from '../context/SpaceContext';
import { useLoyalty } from '../context/LoyaltyContext';
import SpaceSelector from '../components/SpaceSelector';
import TimeSelector from '../components/TimeSelector';
import ReservationSummary from '../components/ReservationSummary';

const Coworking = () => {
  const [selectedSpace, setSelectedSpace] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [duration, setDuration] = useState(1);
  const { dispatch } = useSpace();
  const { dispatch: loyaltyDispatch } = useLoyalty();

  const handleConfirmReservation = () => {
    const reservation = {
      id: Date.now(),
      space: selectedSpace,
      date: selectedTime.date,
      time: selectedTime.time,
      duration,
      total: selectedSpace.pricePerHour * duration
    };

    dispatch({
      type: 'ADD_RESERVATION',
      payload: reservation
    });

    // Award loyalty points (1 point per dollar spent)
    loyaltyDispatch({
      type: 'ADD_POINTS',
      payload: Math.floor(reservation.total)
    });

    alert('Reservation confirmed! Check your email for details.');
    
    // Reset form
    setSelectedSpace(null);
    setSelectedTime(null);
    setDuration(1);
  };

  return (
    <div className="pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="font-playfair text-4xl md:text-5xl mb-4">Coworking Space</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find your perfect workspace in our cafe. Whether you need a quiet corner for focused work or a collaborative space for your team.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="font-playfair text-2xl mb-6">Choose Your Space</h2>
              <SpaceSelector
                onSelect={setSelectedSpace}
                selectedSpace={selectedSpace}
              />
            </section>

            {selectedSpace && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h2 className="font-playfair text-2xl mb-6">Select Time & Duration</h2>
                <div className="space-y-6">
                  <TimeSelector
                    onSelect={setSelectedTime}
                    selectedTime={selectedTime}
                    selectedDuration={duration}
                  />
                  
                  <div>
                    <h3 className="font-playfair text-xl mb-4">Duration</h3>
                    <div className="flex space-x-4">
                      {[1, 2, 3, 4].map((hours) => (
                        <button
                          key={hours}
                          onClick={() => setDuration(hours)}
                          className={`
                            px-4 py-2 rounded-lg
                            ${duration === hours
                              ? 'bg-cafe-brown text-cream'
                              : 'bg-gray-100 hover:bg-gray-200'
                            }
                          `}
                        >
                          {hours} hr{hours > 1 ? 's' : ''}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.section>
            )}
          </div>

          <div>
            <ReservationSummary
              space={selectedSpace}
              time={selectedTime}
              duration={duration}
              onConfirm={handleConfirmReservation}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coworking;