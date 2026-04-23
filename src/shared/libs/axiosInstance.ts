import axios from 'axios';
import { storage, STORAGE_KEY } from './storageInstnace';

export const httpClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

httpClient.interceptors.request.use(config => {
  // read token if exist
  const token = storage.getString(STORAGE_KEY.TOKEN);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  // check body form if type is FormData
  if (config.data instanceof FormData) {
    config.headers['Content-Type'] = 'multipart/form-data';
  }

  return config;
});
