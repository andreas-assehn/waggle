import { User } from '../types/user';
import { login, logout } from '../../app/userAuthSlice';
import { useDispatch } from 'react-redux';

const BASE_URL = 'http://localhost:4000';

const register = async (user: User) => {
  const options: RequestInit = {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-type': 'application/json',
    },
  };
  return await fetch(`${BASE_URL}/users`, options)
    .then(async (response) => await response.json())
    .catch((err) => console.error(err));
};

const updateUser = async (user: User) => {
  const options: RequestInit = {
    method: 'PUT',
    body: JSON.stringify(user),
    headers: {
      'Content-type': 'application/json',
    },
  };
  return await fetch(`${BASE_URL}/users/${user._id}`, options)
    .then((response) => response.json())
    .catch((err) => console.error(err));
};

const getUser = async (id: string) => {
  const options: RequestInit = {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },
  };
  return await fetch(`${BASE_URL}/users/${id}`, options)
    .then((response) => response.json())
    .then((userData) => userData)
    .catch((err) => console.error(err));
};

// const get;

const apiUserService = { register, updateUser, getUser };
export default apiUserService;
