import { motion } from 'framer-motion';
import { useState } from 'react';
import { format, addDays, isToday, isTomorrow } from 'date-fns';

const TimeSelector = ({ onSelect, selectedTime, selectedDuration }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    onSelect({ date, time: selectedTime?.time, duration: selectedDuration });
  };

  const handleTimeSelect = (time) => {
    onSelect({ date: selectedDate, time, duration: selectedDuration });
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-playfair text-xl mb-4">Select Date</h3>
        <div className="flex space-x-4 overflow-x-auto pb-2">
          {[...Array(7)].map((_, index) => {
            const date = addDays(new Date(), index);
            const isSelected = format(selectedDate, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd');

            return (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleDateSelect(date)}
                className={`
                  px-4 py-2 rounded-lg flex flex-col items-center min-w-[100px]
                  ${isSelected ? 'bg-cafe-brown text-cream' : 'bg-gray-100 hover:bg-gray-200'}
                `}
              >
                <span className="text-sm">
                  {isToday(date) ? 'Today' : isTomorrow(date) ? 'Tomorrow' : format(date, 'EEE')}
                </span>
                <span className="font-medium">{format(date, 'MMM d')}</span>
              </motion.button>
            );
          })}
        </div>
      </div>

      <div>
        <h3 className="font-playfair text-xl mb-4">Select Time</h3>
        <div className="grid grid-cols-4 gap-2">
          {availableTimes.map((time) => (
            <motion.button
              key={time}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleTimeSelect(time)}
              className={`
                py-2 rounded-lg text-center
                ${selectedTime?.time === time ? 'bg-cafe-brown text-cream' : 'bg-gray-100 hover:bg-gray-200'}
              `}
            >
              {time}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

const availableTimes = [
  '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM',
  '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'
];

export default TimeSelector;