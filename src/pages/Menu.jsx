import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiShoppingCart } from 'react-icons/fi';
import MenuCard from '../components/MenuCard';
import Cart from '../components/Cart';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('coffee');
  const [isCartOpen, setIsCartOpen] = useState(false);

  const filterItems = (category) => {
    return menuItems.filter(item => item.category === category);
  };

  return (
    <div className="pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-playfair text-4xl md:text-5xl"
          >
            Our Menu
          </motion.h1>
          <button
            onClick={() => setIsCartOpen(true)}
            className="p-2 hover:bg-gray-100 rounded-full relative"
          >
            <FiShoppingCart size={24} />
          </button>
        </div>

        <div className="flex space-x-4 mb-8 overflow-x-auto pb-2">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${
                activeCategory === category.id
                  ? 'bg-cafe-brown text-cream'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filterItems(activeCategory).map(item => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>

        <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </div>
    </div>
  );
};

const categories = [
  { id: 'coffee', name: 'Coffee' },
  { id: 'tea', name: 'Tea' },
  { id: 'pastries', name: 'Pastries' },
  { id: 'seasonal', name: 'Seasonal Specials' }
];

const menuItems = [
  {
    id: 1,
    category: 'coffee',
    name: 'Classic Espresso',
    description: 'Rich and bold double shot of our signature espresso blend',
    price: 3.50,
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 2,
    category: 'coffee',
    name: 'Caramel Macchiato',
    description: 'Espresso marked with foam and vanilla, topped with caramel drizzle',
    price: 4.75,
    image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 3,
    category: 'coffee',
    name: 'Pour Over',
    description: 'Hand-crafted, single-origin coffee brewed to perfection',
    price: 4.25,
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 4,
    category: 'tea',
    name: 'Matcha Latte',
    description: 'Premium Japanese matcha with steamed milk',
    price: 4.50,
    image: 'https://images.unsplash.com/photo-1536514072410-5019a3c69182?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 5,
    category: 'tea',
    name: 'London Fog',
    description: 'Earl Grey tea with steamed milk and vanilla',
    price: 4.25,
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 6,
    category: 'pastries',
    name: 'Almond Croissant',
    description: 'Flaky croissant filled with almond cream',
    price: 4.50,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 7,
    category: 'seasonal',
    name: 'Pumpkin Spice Latte',
    description: 'Fall favorite with real pumpkin and warming spices',
    price: 5.25,
    image: 'https://images.unsplash.com/photo-1508770847704-5f3d770dd3bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  }
];

export default Menu;