import React from 'react';
import { RootState } from '../app/store';
import { useAppSelector } from '../app/hooks';
import { io } from 'socket.io-client';

const socket = io('http://localhost:4000');

function Chat() {
  const { userAuth } = useAppSelector((state: RootState) => state.userAuth);
  socket.onAny((event, ...args) => {
    console.log(event, args);
  });

  const userName = userAuth?.name;
  socket.auth = { userName };
  socket.connect();

  return (
    <>
      <div>Chat</div>
    </>
  );
}

export default Chat;
