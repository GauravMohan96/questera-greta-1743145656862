import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { useLoyalty } from '../context/LoyaltyContext';
import { FiX, FiShoppingCart } from 'react-icons/fi';

const Cart = ({ isOpen, onClose }) => {
  const { state, dispatch } = useCart();
  const { dispatch: loyaltyDispatch } = useLoyalty();

  const calculateTotal = () => {
    return state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleCheckout = () => {
    // Calculate points (10 points per dollar spent)
    const total = calculateTotal();
    const pointsEarned = Math.floor(total * 10);
    
    // Add points to loyalty program
    loyaltyDispatch({
      type: 'ADD_POINTS',
      payload: pointsEarned
    });

    // Clear cart
    dispatch({ type: 'CLEAR_CART' });
    
    // Show confirmation
    alert(`Thank you for your order! You earned ${pointsEarned} points!`);
    onClose();
  };

  const handleQuantityChange = (id, quantity) => {
    if (quantity < 1) {
      dispatch({ type: 'REMOVE_ITEM', payload: id });
    } else {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween' }}
            className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="p-4 h-full flex flex-col">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-playfair text-2xl">Your Order</h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <FiX size={24} />
                </button>
              </div>

              {state.items.length === 0 ? (
                <div className="flex-1 flex flex-col items-center justify-center text-gray-500">
                  <FiShoppingCart size={48} className="mb-4" />
                  <p>Your cart is empty</p>
                </div>
              ) : (
                <>
                  <div className="flex-1 overflow-y-auto">
                    {state.items.map(item => (
                      <div key={item.id} className="border-b py-4">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-playfair text-lg">{item.name}</h3>
                            <p className="text-sm text-gray-600">
                              {item.customizations.size}, {item.customizations.temperature}
                              {item.customizations.extras.length > 0 && (
                                <>
                                  <br />
                                  Extras: {item.customizations.extras.join(', ')}
                                </>
                              )}
                            </p>
                          </div>
                          <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                            className="p-1 hover:bg-gray-100 rounded"
                          >
                            -
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-gray-100 rounded"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-playfair text-xl">Total</span>
                      <span className="font-playfair text-xl">${calculateTotal().toFixed(2)}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      You'll earn {Math.floor(calculateTotal() * 10)} points with this purchase!
                    </p>
                    <button
                      onClick={handleCheckout}
                      className="w-full bg-cafe-brown text-cream py-3 rounded-md hover:bg-warm-gray transition-colors"
                    >
                      Checkout
                    </button>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Cart;