import API from './base';

const register = (user) => {
  return API.post('auth/register', user);
};

const login = (credentials) => API.post('auth', credentials);

const edit = (user) => API.patch('auth/user', user);

const setIMG = (img) => {
  const frm = new FormData();
  frm.append('image', { uri: img, type: 'image/jpg', name: new Date().getTime() + '.jpg' });
  return API.post('auth/user/img', frm, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
    },
  });
};

export default { register, login, edit, setIMG };
