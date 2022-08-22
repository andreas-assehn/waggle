import React, { useEffect, useState } from 'react';
import { RootState } from '../app/store';
import { useAppSelector } from '../app/hooks';
import sendIcon from '../assets/send-2.svg';
import { io } from 'socket.io-client';
import { users } from '../mockData/chatTestData';

const socket = io('http://localhost:4000');

function Chat({ matchId, roomId }: { matchId: string; roomId: string }) {
  const { userAuth } = useAppSelector((state: RootState) => state.userAuth);
  const [room, setRoom] = useState('123');
  const [message, setMessage] = useState('');
  const [messageReceived, setMessageReceived] = useState([] as string[]);

  useEffect(() => {
    socket.emit('join_room', room);
  }, [room]);

  const sendMessage = (event: any) => {
    event.preventDefault();
    socket.emit('send_message', { message, room, userId: userAuth?.userId });
    setMessageReceived((prev) => [...prev, message]);
    setMessage('');
  };

  useEffect(() => {
    socket.on('receive_message', (data) => {
      console.log({ data });
      setMessageReceived((prev) => [...prev, data.message]);
    });
  }, [socket]);

  return userAuth ? (
    <>
      <div>Chat</div>
      <div className="chat-body"></div>
      <h1> Message:</h1>
      {messageReceived.map((msg, i) => (
        <p key={i}>{msg}</p>
      ))}
      <form onSubmit={(event) => sendMessage(event)} className="chat-footer">
        <input
          type="text"
          placeholder="Message..."
          value={message}
          onChange={(event) => {
            event.preventDefault();
            setMessage(event.target.value);
          }}
        />
        <button type="submit">
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
