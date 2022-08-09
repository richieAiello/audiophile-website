import { useAppData } from '../context/AppContext';

const useFindProduct = slug => {
  const data = useAppData();
  return data.find(item => item.slug === slug && item);
};

export default useFindProduct;
