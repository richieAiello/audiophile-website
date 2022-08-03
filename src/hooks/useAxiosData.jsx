import axios from 'axios';
import { useEffect } from 'react';

const useAxiosData = setState => {
  const client = axios.create({
    baseURL: '/data.json',
  });

  useEffect(() => {
    client.get().then(response => {
      setState(response.data);
    });
  }, []);
};

export default useAxiosData;
