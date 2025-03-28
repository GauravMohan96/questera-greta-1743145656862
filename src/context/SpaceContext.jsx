import { createContext, useContext, useReducer, useEffect } from 'react';

const SpaceContext = createContext();

const spaceReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_RESERVATION':
      return {
        ...state,
        reservations: [...state.reservations, action.payload]
      };
    case 'CANCEL_RESERVATION':
      return {
        ...state,
        reservations: state.reservations.filter(res => res.id !== action.payload)
      };
    case 'LOAD_STATE':
      return action.payload;
    default:
      return state;
  }
};

const initialState = {
  reservations: []
};

export const SpaceProvider = ({ children }) => {
  const [state, dispatch] = useReducer(spaceReducer, initialState);

  useEffect(() => {
    const savedState = localStorage.getItem('spaceState');
    if (savedState) {
      dispatch({ type: 'LOAD_STATE', payload: JSON.parse(savedState) });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('spaceState', JSON.stringify(state));
  }, [state]);

  return (
    <SpaceContext.Provider value={{ state, dispatch }}>
      {children}
    </SpaceContext.Provider>
  );
};

export const useSpace = () => {
  const context = useContext(SpaceContext);
  if (!context) {
    throw new Error('useSpace must be used within a SpaceProvider');
  }
  return context;
};