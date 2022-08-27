import express from 'express';
const router = express.Router();
import {
  getUsers,
  getOneUser,
  setUser,
  modifyUser,
  deleteUser,
  addUserSwipeNo,
  addUserSwipeYes,
  getMatchedUsers,
  getUnSwipedUsers,
  changeUserPreferences,
} from './controllers/userController';
import {
  getEvents,
  setEvent,
  modifyEvent,
  deleteEvent,
} from './controllers/eventController';
import {
  createChat,
  getOwnChats,
  getRoomChat,
  addChatMessage,
} from './controllers/chatController';

router.get('/users', getUsers);
router.get('/users/matched/:userId', getMatchedUsers);
router.get('/users/unSwiped/:userId', getUnSwipedUsers);
router.get('/users/:userId', getOneUser);
router.post('/users', setUser);
router.put('/users/:userId', modifyUser);
router.put('/users/swipeNo/:userId', addUserSwipeNo);
router.put('/users/swipeYes/:userId', addUserSwipeYes);
router.delete('/users/:userId', deleteUser);
router.put('/users/preferences/:userId', changeUserPreferences);

router.get('/events/:userId', getEvents);
router.post('/events', setEvent);
router.put('/events/:eventId', modifyEvent);
router.delete('/events/:eventId', deleteEvent);

router.post('/chats', createChat);
router.get('/chats/userChats/:userId', getOwnChats);
router.get('/chats/room/:roomId', getRoomChat);
router.put('/chats/room/:roomId', addChatMessage);

export default router;
