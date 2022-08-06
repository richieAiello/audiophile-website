import { useEffect } from 'react';
import axios from 'axios';

const useAxios = setState => {
  const client = axios.create({
    baseURL: '/data.json',
  });

  useEffect(() => {
    client.get().then(response => {
      setState([...response.data]);
    });
  }, []);
};

export default useAxios;
