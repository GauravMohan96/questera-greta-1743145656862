import { createContext, useContext, useReducer, useEffect } from 'react';

const LoyaltyContext = createContext();

const loyaltyReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_POINTS':
      return {
        ...state,
        points: state.points + action.payload,
        totalEarned: state.totalEarned + action.payload,
        purchases: [...state.purchases, {
          date: new Date().toISOString(),
          points: action.payload,
          type: 'earned'
        }]
      };
    case 'REDEEM_REWARD':
      return {
        ...state,
        points: state.points - action.payload.points,
        redeemedRewards: [...state.redeemedRewards, {
          ...action.payload,
          date: new Date().toISOString()
        }],
        purchases: [...state.purchases, {
          date: new Date().toISOString(),
          points: -action.payload.points,
          type: 'redeemed',
          reward: action.payload.name
        }]
      };
    case 'LOAD_STATE':
      return action.payload;
    default:
      return state;
  }
};

const initialState = {
  points: 0,
  totalEarned: 0,
  purchases: [],
  redeemedRewards: []
};

export const LoyaltyProvider = ({ children }) => {
  const [state, dispatch] = useReducer(loyaltyReducer, initialState);

  useEffect(() => {
    const savedState = localStorage.getItem('loyaltyState');
    if (savedState) {
      dispatch({ type: 'LOAD_STATE', payload: JSON.parse(savedState) });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('loyaltyState', JSON.stringify(state));
  }, [state]);

  return (
    <LoyaltyContext.Provider value={{ state, dispatch }}>
      {children}
    </LoyaltyContext.Provider>
  );
};

export const useLoyalty = () => {
  const context = useContext(LoyaltyContext);
  if (!context) {
    throw new Error('useLoyalty must be used within a LoyaltyProvider');
  }
  return context;
};