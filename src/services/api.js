import axios from 'axios';

const BASE_URL = 'http://localhost:3002';
const REQUEST_TIMEOUT = 5000;

const createAPI = () => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.response.use(
    (response) => response,

    (error) => {
      return Promise.reject(error);
    },
  );

  return api;
};

export {createAPI};
