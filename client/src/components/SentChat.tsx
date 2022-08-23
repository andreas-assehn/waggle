import React from 'react';
import { Message } from '../../../globalUtils/Types';
import '../Css/pages/Chat.css';

function SentChat({ message }: { message: Message }) {
  return (
    <>
      <div className='sent'>
        <p className='sent__message'>{message.message}</p>
      </div>
      <p className='sent__timestamp -small-size'>
        {message.timestamp.slice(11, 16)}
      </p>
    </>
  );
}

export default SentChat;
