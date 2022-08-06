import {
  createContext,
  useContext,
  useReducer,
  useState,
} from 'react';
import useAxios from '../hooks/useAxios';

const AppDataContext = createContext();
const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    default:
      throw new Error(`Unknown action ${action.type}`);
  }
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);
  const [appData, setAppData] = useState([]);
  useAxios(setAppData);

  return (
    <AppDataContext.Provider value={appData}>
      <CartStateContext.Provider value={state}>
        <CartDispatchContext.Provider value={dispatch}>
          {children}
        </CartDispatchContext.Provider>
      </CartStateContext.Provider>
    </AppDataContext.Provider>
  );
};

export const useAppData = () => useContext(AppDataContext);
export const useCartState = () => useContext(CartStateContext);
export const useCartDispatch = () => useContext(CartDispatchContext);
