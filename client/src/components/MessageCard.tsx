import React, { useState, useEffect } from 'react';
import { User } from '../../../globalUtils/Types';
import '../Css/components/MessageCard.css';
import tripledot from '../assets/message-tripledot.svg';
import { Link } from 'react-router-dom';
import apiUserService from '../utils/services/apiUserService';
import defaultDogPic from '../assets/default-dog-pic.jpg';

export default function MessageCard({
  matchId,
  roomId,
  lastMessage,
  readStatus,
  timeStamp,
  handleOpenModal,
}: {
  matchId: string;
  roomId: string;
  lastMessage?: string;
  readStatus?: boolean;
  timeStamp?: string;
  handleOpenModal: (user: User) => void;
}) {
  const [matchedUser, setMatchedUser] = useState<User | null>(null);

  const getMatchedUser = async (matchId: string) => {
    return await apiUserService.getUser(matchId);
  };
  useEffect(() => {
    getMatchedUser(matchId).then((data) => setMatchedUser(() => data as User));
  }, [matchId]);

  return matchedUser ? (
    <div className='message-card'>
      <div className='message-card__background'>
        <div className='message-card__content'>
          <Link
            className='message-card__link'
            to={`/chat/${roomId}`}
            state={{ matchId, roomId }}
          >
            <div className='message-card__picture-container'>
              <img
                className='message-card__picture'
                src={matchedUser?.dog?.images![0] || defaultDogPic}
              />
            </div>
            <div className='message-card__text'>
              <p>
                {matchedUser.name}
                {matchedUser.dog ? `, (${matchedUser.dog.name})` : ''}
              </p>
            </div>
          </Link>
          <div className='message-card__additional-info'>
            <p>{timeStamp}</p>
            <div className='message-card__icons'>
              <button
                onClick={() => handleOpenModal(matchedUser)}
                className='message-card__tripledot --transparent'
              >
                <img src={tripledot} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
}
