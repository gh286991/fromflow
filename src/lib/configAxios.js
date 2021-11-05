import axios from 'axios';

let privateToken = null;

const instance = axios.create({
  baseURL: 'https://65725d07-1cdc-42f0-b1ea-c1878e946cef.mock.pstmn.io',
  timeout: 600000,
});

instance.setToken = (newToken) => {
  privateToken = newToken;
};

instance.interceptors.request.use((config = {}) => {
  if (privateToken) {
    const {
      headers = {},
    } = config;
    headers.Authorization = privateToken;
  }
  return config;
});

// NOTE: Notify authenticationErrorHandler when we got 401 error.
let authenticationErrorHandler;
instance.setAuthenticationErrorHandler = (handler) => {
  authenticationErrorHandler = handler;
};

/**
 * catch error from server's response
 * if we dont do this, we have to get server message from
 * error.response.data.error.message every time
 */
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (authenticationErrorHandler && error && error.response && error.response.status === 401) {
      authenticationErrorHandler();
    }
    return Promise.reject(error.response.data.error);
  },
);

export default instance;
