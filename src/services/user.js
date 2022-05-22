import API from './base';

const register = (user) => {
  return API.post('auth/register', user);
};

const login = (credentials) => API.post('auth', credentials);

const edit = (user) => API.patch('auth/user', user);

export default { register, login, edit };
