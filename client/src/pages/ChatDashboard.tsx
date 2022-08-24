import React, { useState, useEffect } from 'react';
import { Chat, ChatMatch } from '../../../globalUtils/Types';
import { useAppSelector } from '../app/hooks';
import { RootState } from '../app/store';
import DeleteModal from '../components/DeleteModal';
import MessageCard from '../components/MessageCard';
import MessageCardModal from '../components/MessageCardModal';
import YourMatches from '../components/YourMatches';
import '../Css/pages/ChatDashboard.css';
import apiChatService from '../utils/services/apiChatService';

function ChatDashboard() {
  const [openModal, setOpenModal] = useState(false);
  const [currentModal, setCurrentModal] = useState('cardModal');
  const [chatContext, setChatContext] = useState({} as any);
  const [deleteConfirmMsg, setDeleteConfirmMsg] = useState('');
  const [allChats, setAllChats] = useState([] as Chat[]);
  const { userAuth } = useAppSelector((state: RootState) => state.userAuth);
  const { allUsers } = useAppSelector((state: RootState) => state.allUsers);
  const { matchedUsers } = useAppSelector(
    (state: RootState) => state.matchedUsers
  );
  // const [matchedUserChats, setMatchedUserChats] = useState(userAuth?.matches);

  useEffect(() => {
    console.log('chat dash 25');
    if (userAuth) {
      console.log('chat dash 27');
      apiChatService
        .getMatchedChats(userAuth.userId)
        .then((chats) => setAllChats(chats))
        .catch((error) => console.log(error));
    }
  }, []);

  // useEffect(() => {
  //   setMatchedUserChats(userAuth?.matches);
  // }, []);

  const matchedUserChats = userAuth?.matches;

  const handleOpenModal = (chat: ChatMatch) => {
    if (!chatContext.matchId) setChatContext(chat);
    if (
      currentModal === 'matchDeleteModal' ||
      currentModal === 'chatDeleteModal'
    )
      setCurrentModal('cardModal');
    setOpenModal(true);
  };

  const handleModalConfirm = (e: any) => {
    // TO-DO: delete chat/unmatch with user stored in chatContext
    if (e.target.name === 'delete') {
      setDeleteConfirmMsg(
        `Are you sure you want to delete all messages from ${
          allUsers.find((user) => user.userId === chatContext.matchId)?.dog
            ?.name
        }? This action is irreversible.`
      );
      setCurrentModal('chatDeleteModal');
    } else if (e.target.name === 'unmatch') {
      setDeleteConfirmMsg(
        `Are you sure you want to unmatch with ${
          allUsers.find((user) => user.userId === chatContext.matchId)?.dog
            ?.name
        }?`
      );
      setCurrentModal('matchDeleteModal');
    } else if (e.target.name === 'yes' || e.target.name === 'no') {
      setCurrentModal('cardModal');
      setOpenModal(false);
    }
  };

  return (
    <div className='chatDashboard'>
      <YourMatches user={userAuth} matchedUsers={matchedUsers} />
      {matchedUserChats && matchedUserChats.length ? (
        matchedUserChats?.map((chat) => (
          <div key={chat.roomId}>
            <MessageCard
              matchId={chat.matchId}
              roomId={chat.roomId}
              lastMessage={'Say hi! dasd ad as dmadmsao osdp  dsa opa'}
              readStatus={false}
              timeStamp={'23:59'}
              handleOpenModal={() => handleOpenModal(chat)}
            />
          </div>
        ))
      ) : (
        <p className='chatDashboard__no-messages'>You have no messages</p>
      )}
      {currentModal === 'cardModal' ? (
        <MessageCardModal
          setOpenModal={setOpenModal}
          handleModalConfirm={handleModalConfirm}
          openModal={openModal}
        />
      ) : currentModal === 'matchDeleteModal' ? (
        <DeleteModal
          setOpenModal={setOpenModal}
          message={deleteConfirmMsg}
          handleModalConfirm={handleModalConfirm}
          openModal={openModal}
        />
      ) : (
        <DeleteModal
          setOpenModal={setOpenModal}
          message={deleteConfirmMsg}
          handleModalConfirm={handleModalConfirm}
          openModal={openModal}
        />
      )}
    </div>
  );
}

export default ChatDashboard;
