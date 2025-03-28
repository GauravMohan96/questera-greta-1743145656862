import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiMonitor, FiUsers, FiCoffee, FiWifi } from 'react-icons/fi';

const SpaceSelector = ({ onSelect, selectedSpace }) => {
  const [hoveredSpace, setHoveredSpace] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {workspaces.map((space) => (
        <motion.div
          key={space.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
          className={`
            relative rounded-lg overflow-hidden cursor-pointer border-2
            ${selectedSpace?.id === space.id ? 'border-cafe-brown' : 'border-transparent'}
          `}
          onMouseEnter={() => setHoveredSpace(space.id)}
          onMouseLeave={() => setHoveredSpace(null)}
          onClick={() => onSelect(space)}
        >
          <img
            src={space.image}
            alt={space.name}
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300">
            <div className="p-4 absolute bottom-0 left-0 right-0 text-white">
              <h3 className="font-playfair text-xl mb-2">{space.name}</h3>
              <div className="flex items-center space-x-4">
                <span className="flex items-center">
                  <FiUsers className="mr-1" />
                  {space.capacity}
                </span>
                <span>${space.pricePerHour}/hr</span>
              </div>
            </div>
          </div>

          {hoveredSpace === space.id && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 bg-black bg-opacity-70 p-4 flex flex-col justify-center text-white"
            >
              <p className="mb-4">{space.description}</p>
              <div className="flex justify-around">
                {space.amenities.map((amenity, index) => (
                  <div key={index} className="flex flex-col items-center">
                    {amenityIcons[amenity]}
                    <span className="text-sm mt-1">{amenity}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

const amenityIcons = {
  'WiFi': <FiWifi size={20} />,
  'Monitor': <FiMonitor size={20} />,
  'Coffee': <FiCoffee size={20} />
};

const workspaces = [
  {
    id: 1,
    name: 'Focus Pod',
    description: 'Private workspace perfect for focused individual work',
    capacity: '1 person',
    pricePerHour: 15,
    amenities: ['WiFi', 'Monitor', 'Coffee'],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 2,
    name: 'Collaborative Space',
    description: 'Open area ideal for small team meetings and group work',
    capacity: '4 people',
    pricePerHour: 40,
    amenities: ['WiFi', 'Monitor', 'Coffee'],
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 3,
    name: 'Meeting Room',
    description: 'Private room equipped for presentations and team meetings',
    capacity: '8 people',
    pricePerHour: 60,
    amenities: ['WiFi', 'Monitor', 'Coffee'],
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 4,
    name: 'Quiet Zone',
    description: 'Silent area for deep work and concentration',
    capacity: '1 person',
    pricePerHour: 12,
    amenities: ['WiFi', 'Coffee'],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  }
];

export default SpaceSelector;