import { useContext } from 'react';
import DataContext from '../Context/DataContext';

const getProduct = slug => {
  const data = useContext(DataContext);
  return data.find(item => item.slug === slug && item);
};

export default getProduct;
