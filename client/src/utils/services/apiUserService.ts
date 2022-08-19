import { Swiped, User } from '../../../../globalUtils/Types';
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

  try {
    const response = await fetch(`${BASE_URL}/users`, options);
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

const updateUser = async (user: EditUserProfile) => {
  const options: RequestInit = {
    method: 'PUT',
    body: JSON.stringify(user),
    headers: {
      'Content-type': 'application/json',
    },
  };
  try {
    const response = await fetch(`${BASE_URL}/users/${user._id}`, options);
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

const updateUserSwipes = async (data: Swiped, swipe: string) => {
  const options: RequestInit = {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json',
    },
  };
  try {
    const response = await fetch(
      `${BASE_URL}/users/swipe${swipe}/${data._id}`,
      options
    );
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

const getUser = async (id: string) => {
  const options: RequestInit = {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },
  };
  try {
    const response = await fetch(`${BASE_URL}/users/${id}`, options);
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

const getAllUsers = async () => {
  const options: RequestInit = {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },
  };
  try {
    const response = await fetch(`${BASE_URL}/users`, options);
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

const getUnSwipedUsers = async (id: string) => {
  const options: RequestInit = {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },
  };
  try {
    const response = await fetch(`${BASE_URL}/users/unSwiped/${id}`, options);
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

const apiUserService = {
  register,
  updateUser,
  updateUserSwipes,
  getUser,
  getAllUsers,
  getUnSwipedUsers,
};
export default apiUserService;
