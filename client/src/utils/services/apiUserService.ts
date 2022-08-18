import { User } from '../../../../globalUtils/Types';
import { EditUserProfile } from '../types/user';

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

const updateUser = async (user: EditUserProfile) => {
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

const updateUserSwipes = async (user: User) => {
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

const getAllUsers = async () => {
  const options: RequestInit = {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },
  };
  return await fetch(`${BASE_URL}/users`, options)
    .then((response) => response.json())
    .then((userData) => userData)
    .catch((err) => console.error(err));
};

const apiUserService = {
  register,
  updateUser,
  updateUserSwipes,
  getUser,
  getAllUsers,
};
export default apiUserService;
