import React, { useState } from 'react';
import { useAppSelector } from '../app/hooks';
import { RootState } from '../app/store';
import DeleteModal from '../components/DeleteModal';
import YourMatches from '../components/YourMatches';

function ChatDashboard() {
  const [openModal, setOpenModal] = useState(false);
  const { userAuth } = useAppSelector((state: RootState) => state.userAuth);
  const { matchedUsers } = useAppSelector(
    (state: RootState) => state.matchedUsers
  );
  const deleteConfirmMsg =
    'Are you sure you want to delete all messages from <user>? This action is irreversible.';

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleModalConfirm = () => {
    // whatever your function wants to do on confirm
  };

  return (
    <>
      <div className="chatDashboard">
        <YourMatches user={userAuth} matchedUsers={matchedUsers} />
        <DeleteModal
          setOpenModal={setOpenModal}
          message={deleteConfirmMsg}
          handleModalConfirm={handleModalConfirm}
          openModal={openModal}
        />
      </div>
    </>
  );
}

export default ChatDashboard;
