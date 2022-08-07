import {
  createContext,
  useContext,
  useReducer,
  useState,
  useEffect,
} from 'react';
import axios from 'axios';

const AppDataContext = createContext();
const SlugsContext = createContext();
const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.products];
    default:
      throw new Error(`Unknown action ${action.type}`);
  }
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);
  const [appData, setAppData] = useState(() => {
    return JSON.parse(localStorage.getItem('appData'));
  });
  const [slugs, setSlugs] = useState(() => {
    return JSON.parse(localStorage.getItem('slugs'));
  });

  useEffect(() => {
    axios.get('/data.json').then(response => {
      setAppData([...response.data]);
      setSlugs(
        response.data.map(item => {
          return {
            slug: item.slug,
            location: `/details/${item.slug}`,
          };
        })
      );
    });
  }, []);

  useEffect(() => {
    localStorage.setItem('appData', JSON.stringify(appData));
  }, [appData]);

  useEffect(() => {
    localStorage.setItem('slugs', JSON.stringify(slugs));
  }, [slugs]);

  return (
    <AppDataContext.Provider value={appData}>
      <SlugsContext.Provider value={slugs}>
        <CartStateContext.Provider value={state}>
          <CartDispatchContext.Provider value={dispatch}>
            {children}
          </CartDispatchContext.Provider>
        </CartStateContext.Provider>
      </SlugsContext.Provider>
    </AppDataContext.Provider>
  );
};

export const useAppData = () => useContext(AppDataContext);
export const useSlugs = () => useContext(SlugsContext);
export const useCartState = () => useContext(CartStateContext);
export const useCartDispatch = () => useContext(CartDispatchContext);
