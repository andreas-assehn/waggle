import React from 'react';
import { User } from '../../../globalUtils/Types';
import '../Css/components/MessageCard.css';
import read from '../assets/message-read.svg';
import unread from '../assets/message-unread.svg';
import tripledot from '../assets/message-tripledot.svg';
import { Link } from 'react-router-dom';

export default function MessageCard({
  matchedUser,
  lastMessage = 'No messages yet',
  readStatus = true,
  timeStamp = 'HH:SS',
  handleOpenModal,
}: {
  matchedUser: User | null;
  lastMessage: string;
  readStatus?: boolean;
  timeStamp: string;
  handleOpenModal: (user: User) => void;
}) {
  if (!matchedUser) return <p>Loading...</p>;
  return (
    <div className="message-card">
      <div className="message-card__background">
        <div className="message-card__content">
          {/* TO-DO: Need to pass param here to view the right chat  */}
          <Link className="message-card__link" to={'/chat'}>
            <div className="message-card__picture-container">
              <img
                className="message-card__picture"
                src={
                  matchedUser.dog && matchedUser.dog.images
                    ? matchedUser.dog.images[0]
                    : ''
                }
              />
            </div>
            <div className="message-card__text">
              <p>
                {matchedUser.dog ? matchedUser.dog.name : ''} (
                {matchedUser.name})
              </p>
              <p>
                {lastMessage.length > 19
                  ? `${lastMessage.slice(0, 18)}...`
                  : lastMessage}
              </p>
            </div>
          </Link>
          <div className="message-card__additional-info">
            <p>{timeStamp}</p>
            <div className="message-card__icons">
              <img
                className="message-card__read-unread"
                src={readStatus ? read : unread}
              />
              <button
                onClick={() => handleOpenModal(matchedUser)}
                className="message-card__tripledot --transparent"
              >
                <img src={tripledot} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
