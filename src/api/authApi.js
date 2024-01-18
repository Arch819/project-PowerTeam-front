import axios from 'axios';

export const register = async (body) => {
  const { data } = await axios.post('users/register', body);
  return data;
};

export const login = async body => {
  const { data } = await axios.post('users/login', body);
  return data;
};

export const logOut = async () => {
  const { data } = await axios.post('users/logout');
  return data;
};

export const currentUser = async () => {
  const { data } = await axios.get('users/current');
  return data;
};

export const avatar = async date => {
  const { data } = await axios.patch('users/avatar', date);
  return data;
};

export const profile = async newUser => {
  const { data } = await axios.patch('users/profile', newUser);
  return data;
};
