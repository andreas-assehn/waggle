import React, { useState, useEffect } from 'react';
import { Chat, ChatMatch } from '../../../globalUtils/Types';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { setMatchedUsersState } from '../app/matchedUsersSlice';
import { RootState } from '../app/store';
import { login } from '../app/userAuthSlice';
import DeleteModal from '../components/DeleteModal';
import MessageCard from '../components/MessageCard';
import MessageCardModal from '../components/MessageCardModal';
import YourMatches from '../components/YourMatches';
import '../Css/pages/ChatDashboard.css';
import apiChatService from '../utils/services/apiChatService';
import apiUserService from '../utils/services/apiUserService';

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
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (userAuth) {
      apiChatService
        .getMatchedChats(userAuth.userId)
        .then((chats) => setAllChats(chats))
        .catch((error) => console.log(error));
    }
  }, []);

  const matchedUserChats = userAuth?.matches;

  const handleOpenModal = (chat: ChatMatch) => {
    if (!chatContext.matchId) setChatContext(chat);
    if (currentModal === 'matchDeleteModal') setCurrentModal('cardModal');
    setOpenModal(true);
  };

  const handleModalConfirm = (e: any) => {
    if (e.target.name === 'unmatch') {
      setDeleteConfirmMsg(
        `Are you sure you want to unmatch with ${
          allUsers.find((user) => user.userId === chatContext.matchId)?.dog
            ?.name
        }?`
      );
      setCurrentModal('matchDeleteModal');
    } else if (e.target.name === 'yes') {
      unmatchUser(userAuth, chatContext);
      setCurrentModal('cardModal');
      setOpenModal(false);
    }
  };

  const unmatchUser = async (user: any, userToUnmatch: any) => {
    if (!user) return;
    try {
      const updatedMatches = user.matches.filter(
        (match: any) => match.matchId !== userToUnmatch.matchId
      );
      const updatedSwipeYes = user.swipeYes.filter(
        (id: string) => id !== userToUnmatch.matchId
      );
      const updatedSwipeNo = [...user.swipeNo, userToUnmatch.matchId];
      const updatedUser = {
        ...user,
        matches: updatedMatches,
        swipeYes: updatedSwipeYes,
        swipeNo: updatedSwipeNo,
      };
      await apiUserService.updateUser(updatedUser);
      dispatch(login(updatedUser));
      const matchedUsers = await apiUserService.getMatchedUsers(user.userId);
      dispatch(setMatchedUsersState(matchedUsers));
      return updatedUser;
    } catch (e) {
      console.log(e);
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
