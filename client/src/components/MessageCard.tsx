import React from 'react';
import { User } from '../../../globalUtils/Types';
import '../Css/components/MessageCard.css';
import read from '../assets/message-read.svg';
import unread from '../assets/message-unread.svg';
import tripledot from '../assets/message-tripledot.svg';

export default function MessageCard({
  user,
  lastMessage = 'Say hi! dasd ad as dmadmsao osdp  dsa opa',
  readStatus = true,
  timeStamp = '23:59',
  handleOpenModal,
}: {
  user?: User | null;
  lastMessage?: string;
  readStatus?: boolean;
  timeStamp?: string;
  handleOpenModal?: () => void;
}) {
  if (!user) return <p>Loading...</p>;
  return (
    <div className="message-card">
      <div className="message-card__background">
        <div className="message-card__content">
          <div className="message-card__picture-container">
            <img
              className="message-card__picture"
              src={user.dog && user.dog.images ? user.dog.images[0] : ''}
            />
          </div>
          <div className="message-card__text">
            <p>
              {user.dog ? user.dog.name : ''} ({user.name})
            </p>
            <p>
              {lastMessage.length > 19
                ? `${lastMessage.slice(0, 18)}...`
                : lastMessage}
            </p>
          </div>
          <div className="message-card__additional-info">
            <p>{timeStamp}</p>
            <div className="message-card__icons">
              <img src={readStatus ? read : unread} />
              <button
                onClick={handleOpenModal}
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
