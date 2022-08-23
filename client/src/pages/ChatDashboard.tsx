import React, { useState, useEffect } from 'react';
import { User, Chat } from '../../../globalUtils/Types';
import { useAppSelector } from '../app/hooks';
import { RootState } from '../app/store';
import DeleteModal from '../components/DeleteModal';
import MessageCard from '../components/MessageCard';
import YourMatches from '../components/YourMatches';
import '../Css/pages/ChatDashboard.css';
import apiChatService from '../utils/services/apiChatService';

function ChatDashboard() {
  const [openModal, setOpenModal] = useState(false);
  const [messagesToDelete, setMessagesToDelete] = useState({});
  const [deleteConfirmMsg, setDeleteConfirmMsg] = useState('');
  const [allChats, setAllChats] = useState([] as Chat[]);
  const { userAuth } = useAppSelector((state: RootState) => state.userAuth);
  const { matchedUsers } = useAppSelector(
    (state: RootState) => state.matchedUsers
  );

  useEffect(() => {
    if (userAuth) {
      apiChatService
        .getMatchedChats(userAuth.userId)
        .then((chats) => setAllChats(chats))
        .catch((error) => console.log(error));
    }
  }, [userAuth]);

  const matchedUserChats = userAuth?.matches;

  const handleOpenModal = (user: User) => {
    setDeleteConfirmMsg(
      `Are you sure you want to delete all messages from ${user.name}? This action is irreversible.`
    );
    setMessagesToDelete(user);
    setOpenModal(true);
  };

  const handleModalConfirm = () => {
    // TO-DO: delete messages associated with user stored in messagesToDelete
    setOpenModal(false);
  };

  return (
    <div className='chatDashboard'>
      <YourMatches user={userAuth} matchedUsers={matchedUsers} />
      {matchedUsers && matchedUsers.length ? (
        matchedUserChats?.map((chat) => (
          <div key={chat.roomId}>
            <MessageCard
              matchId={chat.matchId}
              roomId={chat.roomId}
              lastMessage={'Say hi! dasd ad as dmadmsao osdp  dsa opa'}
              readStatus={false}
              timeStamp={'23:59'}
              handleOpenModal={handleOpenModal}
            />
          </div>
        ))
      ) : (
        <p className='chatDashboard__no-messages'>You have no messages</p>
      )}
      <DeleteModal
        setOpenModal={setOpenModal}
        message={deleteConfirmMsg}
        handleModalConfirm={handleModalConfirm}
        openModal={openModal}
      />
    </div>
  );
}

export default ChatDashboard;
