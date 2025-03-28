import { motion } from 'framer-motion';
import { useState } from 'react';
import { useCart } from '../context/CartContext';

const MenuCard = ({ item }) => {
  const { dispatch } = useCart();
  const [customizations, setCustomizations] = useState({
    size: 'medium',
    temperature: 'hot',
    extras: []
  });
  const [showCustomize, setShowCustomize] = useState(false);

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: item.id,
        name: item.name,
        price: calculatePrice(),
        customizations
      }
    });
    setShowCustomize(false);
  };

  const calculatePrice = () => {
    let basePrice = item.price;
    if (customizations.size === 'large') basePrice += 1;
    if (customizations.extras.length) {
      basePrice += customizations.extras.length * 0.50;
    }
    return basePrice;
  };

  const toggleExtra = (extra) => {
    setCustomizations(prev => ({
      ...prev,
      extras: prev.extras.includes(extra)
        ? prev.extras.filter(e => e !== extra)
        : [...prev.extras, extra]
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-playfair text-xl mb-2">{item.name}</h3>
        <p className="text-gray-600 mb-2">{item.description}</p>
        <p className="text-cafe-brown font-semibold mb-3">${calculatePrice().toFixed(2)}</p>

        {!showCustomize ? (
          <button
            onClick={() => setShowCustomize(true)}
            className="w-full bg-cafe-brown text-cream py-2 rounded-md hover:bg-warm-gray transition-colors"
          >
            Customize & Order
          </button>
        ) : (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Size</label>
              <select
                value={customizations.size}
                onChange={(e) => setCustomizations(prev => ({ ...prev, size: e.target.value }))}
                className="w-full p-2 border rounded-md"
              >
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large (+$1.00)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Temperature</label>
              <select
                value={customizations.temperature}
                onChange={(e) => setCustomizations(prev => ({ ...prev, temperature: e.target.value }))}
                className="w-full p-2 border rounded-md"
              >
                <option value="hot">Hot</option>
                <option value="iced">Iced</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Extras (+$0.50 each)</label>
              <div className="space-y-2">
                {['Extra Shot', 'Whipped Cream', 'Caramel Drizzle'].map(extra => (
                  <label key={extra} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={customizations.extras.includes(extra)}
                      onChange={() => toggleExtra(extra)}
                      className="mr-2"
                    />
                    {extra}
                  </label>
                ))}
              </div>
            </div>

            <div className="flex space-x-2">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-cafe-brown text-cream py-2 rounded-md hover:bg-warm-gray transition-colors"
              >
                Add to Cart
              </button>
              <button
                onClick={() => setShowCustomize(false)}
                className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-md hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default MenuCard;