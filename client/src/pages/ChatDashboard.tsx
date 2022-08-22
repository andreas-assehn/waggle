import React, { useState } from 'react';
import { User } from '../../../globalUtils/Types';
import { useAppSelector } from '../app/hooks';
import { RootState } from '../app/store';
import DeleteModal from '../components/DeleteModal';
import MessageCard from '../components/MessageCard';
import YourMatches from '../components/YourMatches';
import '../Css/pages/ChatDashboard.css';

function ChatDashboard() {
  const [openModal, setOpenModal] = useState(false);
  const [messagesToDelete, setMessagesToDelete] = useState({});
  const [deleteConfirmMsg, setDeleteConfirmMsg] = useState('');
  const { userAuth } = useAppSelector((state: RootState) => state.userAuth);
  const { matchedUsers } = useAppSelector(
    (state: RootState) => state.matchedUsers
  );

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
    <div className="chatDashboard">
      <YourMatches user={userAuth} matchedUsers={matchedUsers} />
      {matchedUsers && matchedUsers.length ? (
        matchedUsers.map((matchedUser) => (
          <MessageCard
            key={matchedUser.userId}
            matchedUser={matchedUser}
            lastMessage={'Say hi! dasd ad as dmadmsao osdp  dsa opa'}
            readStatus={false}
            timeStamp={'23:59'}
            handleOpenModal={handleOpenModal}
          />
        ))
      ) : (
        <p className="chatDashboard__no-messages">You have no messages</p>
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
