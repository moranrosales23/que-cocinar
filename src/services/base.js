import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const instance = axios.create({
  baseURL: `${process.env.BASE_URL}`,
});

instance.interceptors.request.use(
  async (config) => {
    const tk = AsyncStorage.getItem('@tk');
    config.headers = {
      Authorization: `Bearer ${tk}`,
      Accept: 'application/json',
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default instance;
