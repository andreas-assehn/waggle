import React from 'react';
import { Message } from '../../../globalUtils/Types';
import '../Css/pages/Chat.css';

function ReceivedChat({ message }: { message: Message }) {
  return (
    <>
      <div className='received'>
        <p className='received__message'>{message.message}</p>
      </div>
      <p className='received__timestamp -small-size'>
        {message.timestamp.slice(11, 16)}
      </p>
    </>
  );
}

export default ReceivedChat;
