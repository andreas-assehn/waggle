import React, { useEffect, useState } from 'react';
import { RootState } from '../app/store';
import { useAppSelector } from '../app/hooks';
import sendIcon from '../assets/send.svg';
import { io } from 'socket.io-client';
import { useLocation, useParams } from 'react-router-dom';
import { Message, LocationState } from '../../../globalUtils/Types';
import apiChatService from '../utils/services/apiChatService';
import '../Css/pages/Chat.css';
import ReceivedChat from '../components/ReceivedChat';
import SentChat from '../components/SentChat';
import apiUserService from '../utils/services/apiUserService';
import { useDispatch } from 'react-redux';
import { setNameState } from '../app/chatNameSlice';

const socket = io('http://localhost:4000');

function Chat() {
  const { userAuth } = useAppSelector((state: RootState) => state.userAuth);
  const { chatName } = useAppSelector((state: RootState) => state.chatName);

  const [room, setRoom] = useState('');
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([] as Message[]);

  const { roomId } = useParams();
  const location = useLocation();

  const dispatch = useDispatch();
  const { matchId } = location.state as LocationState;

  useEffect(() => {
    if (userAuth && roomId) {
      setRoom(roomId);
      apiChatService
        .getChatRoom(roomId)
        .then((chats) => {
          setChatMessages(chats.messages);
        })
        .catch((error) => console.log(error));

      const targetName = async (matchId: string) => {
        const res = await apiUserService.getUser(matchId);
        dispatch(setNameState(res?.name));
        return res;
      };
      targetName(matchId);
    }
  }, [userAuth]);

  useEffect(() => {
    socket.emit('join_room', room);
  }, [room]);

  useEffect(() => {
    socket.on('receive_message', (data) => {
      setChatMessages((prev) => [...prev, data.sentMessage]);
    });
  }, [socket]);

  if (!userAuth) return <div>Loading...</div>;

  const sendMessage = async (event: any) => {
    event.preventDefault();
    const sentMessage: Message = {
      message,
      userId: userAuth.userId!,
      timestamp: `${new Date(Date.now()).toISOString()}`,
    };
    socket.emit('send_message', {
      sentMessage,
      room,
      userId: userAuth?.userId,
    });
    setChatMessages((prev) => [...prev, sentMessage]);
    try {
      await apiChatService.sendMessageToChatRoom(sentMessage, room);
    } catch (error) {
      console.log(error);
    }

    setMessage('');
  };

  return userAuth ? (
    <>
      <div className='chat-body'>
        {chatMessages.map((msg, i) =>
          userAuth.userId === msg.userId ? (
            <SentChat key={i} message={msg} />
          ) : (
            <ReceivedChat key={i} message={msg} />
          )
        )}
        <div className='chat-body__padding'></div>
      </div>
      <form onSubmit={(event) => sendMessage(event)} className='chat-footer'>
        <input
          className='chat-footer__input'
          type='text'
          placeholder='Message...'
          value={message}
          onChange={(event) => {
            event.preventDefault();
            setMessage(event.target.value);
          }}
        />
        <button className='chat-footer__button --transparent' type='submit'>
          <img className='chat-footer__send-icon' src={sendIcon} />
        </button>
      </form>
    </>
  ) : (
    <div>Loading ...</div>
  );
}

export default Chat;
