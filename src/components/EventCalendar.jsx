import { useState } from 'react';
import { motion } from 'framer-motion';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameDay, isToday } from 'date-fns';
import { FiChevronLeft, FiChevronRight, FiClock, FiMapPin, FiUsers } from 'react-icons/fi';

const EventCalendar = ({ events, onSelectEvent }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const daysInMonth = eachDayOfInterval({
    start: startOfMonth(currentDate),
    end: endOfMonth(currentDate)
  });

  const getEventsForDate = (date) => {
    return events.filter(event => isSameDay(new Date(event.date), date));
  };

  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));
  const prevMonth = () => setCurrentDate(subMonths(currentDate, 1));

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={prevMonth}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <FiChevronLeft size={24} />
        </button>
        <h2 className="font-playfair text-2xl">
          {format(currentDate, 'MMMM yyyy')}
        </h2>
        <button
          onClick={nextMonth}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <FiChevronRight size={24} />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-2 mb-4">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-center font-poppins font-medium text-gray-500">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2">
        {daysInMonth.map((date, index) => {
          const dayEvents = getEventsForDate(date);
          const hasEvents = dayEvents.length > 0;
          const isSelected = selectedDate && isSameDay(date, selectedDate);

          return (
            <motion.div
              key={date.toString()}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`
                aspect-square p-1 rounded-lg cursor-pointer
                ${isSelected ? 'bg-cafe-brown text-cream' : 'hover:bg-gray-100'}
                ${isToday(date) ? 'border-2 border-cafe-brown' : ''}
              `}
              onClick={() => {
                setSelectedDate(date);
                if (hasEvents) {
                  onSelectEvent(dayEvents[0]);
                }
              }}
            >
              <div className="h-full flex flex-col">
                <span className="text-right text-sm mb-1">
                  {format(date, 'd')}
                </span>
                {hasEvents && (
                  <div className="flex-1 flex items-end">
                    <div className={`w-full h-1 rounded-full ${isSelected ? 'bg-cream' : 'bg-cafe-brown'}`} />
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default EventCalendar;