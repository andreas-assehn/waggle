import React, { useEffect, useState } from 'react';
import { RootState } from '../app/store';
import { useAppSelector } from '../app/hooks';
import sendIcon from '../assets/send-2.svg';
import { io } from 'socket.io-client';
import { users } from '../mockData/chatTestData';
import { useLocation } from 'react-router-dom';
import { LocationState, Message } from '../../../globalUtils/Types';
import apiChatService from '../utils/services/apiChatService';

const socket = io('http://localhost:4000');

function Chat({ matchId, roomId }: { matchId?: string; roomId?: string }) {
  const { userAuth } = useAppSelector((state: RootState) => state.userAuth);
  const [room, setRoom] = useState('');
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([] as Message[]);

  const location = useLocation();

  useEffect(() => {
    if (userAuth) {
      const { matchId, roomId } = location.state as LocationState;
      setRoom(roomId);
      apiChatService
        .getChatRoom(roomId)
        .then((chats) => {
          console.log(chats);
          setChatMessages(chats.messages);
        })
        .catch((error) => console.log(error));
    }
  }, []);

  useEffect(() => {
    socket.emit('join_room', room);
  }, [room]);

  useEffect(() => {
    socket.on('receive_message', (data) => {
      setChatMessages((prev) => [...prev, data.message]);
    });
  }, [socket]);

  if (!userAuth) return <div>Loading...</div>;

  const sendMessage = (event: any) => {
    event.preventDefault();
    const sentMessage: Message = {
      message,
      userId: userAuth.userId!,
      timestamp: `${new Date(Date.now())}`,
    };
    socket.emit('send_message', { message, room, userId: userAuth?.userId });
    setChatMessages((prev) => [...prev, sentMessage]);
    // add sent message to database
    setMessage('');
  };

  return userAuth ? (
    <>
      <div>Chat</div>
      <div className='chat-body'></div>
      <h1> Message:</h1>
      {chatMessages.map((msg, i) => (
        <p key={i}>{msg.message}</p>
      ))}
      <form onSubmit={(event) => sendMessage(event)} className='chat-footer'>
        <input
          type='text'
          placeholder='Message...'
          value={message}
          onChange={(event) => {
            event.preventDefault();
            setMessage(event.target.value);
          }}
        />
        <button type='submit'>
          <img src={sendIcon} />
        </button>
      </form>
    </>
  ) : (
    <div>Loading ...</div>
  );
}

export default Chat;

// socket.onAny((event, ...args) => {
//   console.log(event, args);
// });

// console.log(userAuth);

// const userName = userAuth;
// socket.auth = { userName };
// socket.connect();
