import { User } from '../types/user';

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
    .then((response) => response.json())
    .catch((err) => console.error(err));
};

const apiUserService = { register };
export default apiUserService;
