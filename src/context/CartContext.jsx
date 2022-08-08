import {
  createContext,
  useContext,
  useReducer,
  useEffect,
} from 'react';

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      console.log('ADD');
      return [...state, action.addProduct];
    case 'UPDATE':
      console.log('UPDATE');
      return action.updateProduct;
    case 'INCREMENT':
      console.log('INCREMENT');
      return action.incrementProduct;
    case 'DECREMENT':
      console.log('DECREMENT');
      return action.decrementProduct;
    case 'REMOVE':
      console.log('REMOVE');
      return action.removeProduct;
    case 'EMPTY':
      return [];
  }
  throw new Error(`Unknown action: ${action.type}`);
};

export const CartContextProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(reducer, null, () => {
    return JSON.parse(localStorage.getItem('cart')) ?? [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log(cart);
  }, [cart]);

  return (
    <CartStateContext.Provider value={cart}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartStateContext.Provider>
  );
};

export const useCartState = () => useContext(CartStateContext);
export const useCartDispatch = () => useContext(CartDispatchContext);
