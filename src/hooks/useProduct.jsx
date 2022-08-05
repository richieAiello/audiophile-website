import { useEffect, useState } from 'react';
import axios from 'axios';

const useProduct = slug => {
  const [data, setData] = useState([]);

  const client = axios.create({
    baseURL: '/data.json',
  });

  useEffect(() => {
    client.get().then(response => {
      setData([...response.data]);
    });
  }, []);

  return data.find(item => item.slug === slug && item);
};

export default useProduct;
