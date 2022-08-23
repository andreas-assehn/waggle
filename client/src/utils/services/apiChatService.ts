const BASE_URL = 'http://localhost:4000';

const createChat = async (data: any) => {
  console.log(data);
  const options: RequestInit = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json',
    },
  };

  try {
    const response = await fetch(`${BASE_URL}/chats`, options);
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

const getMatchedChats = async (id: string) => {
  const options: RequestInit = {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },
  };
  try {
    const response = await fetch(`${BASE_URL}/users/userChats/${id}`, options);
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

const getChatRoom = async (id: string) => {
  const options: RequestInit = {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },
  };
  try {
    const response = await fetch(`${BASE_URL}/chats/room/${id}`, options);
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

const apiChatService = { createChat, getMatchedChats, getChatRoom };

export default apiChatService;
