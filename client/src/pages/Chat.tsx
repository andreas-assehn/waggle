import React from 'react';
import { RootState } from '../app/store';
import { useAppSelector } from '../app/hooks';
import { io } from 'socket.io-client';
import { users } from '../mockData/chatTestData';

const socket = io('http://localhost:4000');

function Chat() {
  const { userAuth } = useAppSelector((state: RootState) => state.userAuth);
  socket.onAny((event, ...args) => {
    console.log(event, args);
  });

  console.log(userAuth);

  const userName = userAuth;
  socket.auth = { userName };
  socket.connect();

  const onMessage = (content: string) => {
    socket.emit('private message', {
      content,
      to: users[0].matches[0],
    });
  };

  return (
    <>
      <div>Chat</div>
    </>
  );
}

export default Chat;
