import { useState } from 'react';
import { motion } from 'framer-motion';
import EventCalendar from '../components/EventCalendar';
import EventDetails from '../components/EventDetails';
import BookingModal from '../components/BookingModal';

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleBooking = (bookingData) => {
    // Here you would typically send the booking data to your backend
    console.log('Booking submitted:', bookingData);
    alert('Thank you for booking! You will receive a confirmation email shortly.');
  };

  return (
    <div className="pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="font-playfair text-4xl md:text-5xl mb-4">Community Events</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join us for exciting events, from coffee tastings to live music nights. Book your spot and be part of our vibrant community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <EventCalendar
              events={events}
              onSelectEvent={setSelectedEvent}
            />
          </div>
          <div>
            <EventDetails
              event={selectedEvent}
              onClose={() => setSelectedEvent(null)}
              onBook={(event) => {
                setIsBookingModalOpen(true);
              }}
            />
          </div>
        </div>

        <BookingModal
          event={selectedEvent}
          isOpen={isBookingModalOpen}
          onClose={() => setIsBookingModalOpen(false)}
          onSubmit={handleBooking}
        />
      </div>
    </div>
  );
};

// Sample events data
const events = [
  {
    id: 1,
    title: "Coffee Tasting Workshop",
    date: "2024-03-25",
    time: "6:00 PM",
    location: "Main Cafe Area",
    description: "Join our expert baristas for a guided tasting of our newest single-origin coffees. Learn about different brewing methods and flavor profiles.",
    price: 25.00,
    spotsLeft: 8
  },
  {
    id: 2,
    title: "Live Jazz Night",
    date: "2024-03-28",
    time: "7:30 PM",
    location: "Cafe Courtyard",
    description: "Enjoy an evening of smooth jazz with local musicians while sipping on your favorite coffee drinks.",
    price: 15.00,
    spotsLeft: 20
  },
  {
    id: 3,
    title: "Latte Art Workshop",
    date: "2024-04-02",
    time: "5:00 PM",
    location: "Barista Station",
    description: "Learn the basics of latte art from our skilled baristas. Perfect for coffee enthusiasts who want to up their home barista game.",
    price: 30.00,
    spotsLeft: 6
  },
  {
    id: 4,
    title: "Poetry Reading Night",
    date: "2024-04-05",
    time: "6:30 PM",
    location: "Main Cafe Area",
    description: "Local poets share their work in an intimate setting. Open mic session available for attendees.",
    price: 0.00,
    spotsLeft: 30
  },
  {
    id: 5,
    title: "Breakfast Pastry Masterclass",
    date: "2024-04-10",
    time: "9:00 AM",
    location: "Cafe Kitchen",
    description: "Learn to make our famous croissants and morning pastries with our head baker.",
    price: 45.00,
    spotsLeft: 8
  }
];

export default Events;