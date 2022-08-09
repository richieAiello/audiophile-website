import {
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react';
import axios from 'axios';

const AppDataContext = createContext();
const SlugsContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [appData, setAppData] = useState(() => {
    return JSON.parse(localStorage.getItem('appData')) ?? [];
  });
  const [slugs, setSlugs] = useState(() => {
    return JSON.parse(localStorage.getItem('slugs')) ?? [];
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
        {children}
      </SlugsContext.Provider>
    </AppDataContext.Provider>
  );
};

export const useAppData = () => useContext(AppDataContext);
export const useSlugs = () => useContext(SlugsContext);
