import { Message } from '../../../../globalUtils/Types';

const BASE_URL = 'http://localhost:4000';

const createChat = async (data: any) => {
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
    const response = await fetch(`${BASE_URL}/chats/userChats/${id}`, options);
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

const sendMessageToChatRoom = async (message: Message, roomId: string) => {
  const options: RequestInit = {
    method: 'PUT',
    body: JSON.stringify(message),
    headers: {
      'Content-type': 'application/json',
    },
  };
  try {
    const response = await fetch(`${BASE_URL}/chats/room/${roomId}`, options);
    const res = await response.json();
    return res;
  } catch (error) {
    console.error(error);
  }
};

const apiChatService = {
  createChat,
  getMatchedChats,
  getChatRoom,
  sendMessageToChatRoom,
};

export default apiChatService;
