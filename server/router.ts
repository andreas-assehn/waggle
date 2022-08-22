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
} from './controllers/userController';
import {
  getMatches,
  setMatch,
  modifyMatch,
  deleteMatch,
} from './controllers/matchController';
import {
  getEvents,
  setEvent,
  modifyEvent,
  deleteEvent,
} from './controllers/eventController';
import authMiddleware from './middleware/auth';

router.get('/users', getUsers);
router.get('/users/matched/:userId', getMatchedUsers);
router.get('/users/unSwiped/:userId', getUnSwipedUsers);
router.get('/users/:userId', getOneUser);
router.post('/users', setUser);
router.put('/users/:userId', modifyUser);
router.put('/users/swipeNo/:userId', addUserSwipeNo);
router.put('/users/swipeYes/:userId', addUserSwipeYes);
router.delete('/users/:userId', deleteUser);

router.get('/matches', getMatches);
router.post('/matches/:userId:', setMatch);
router.put('/matches/:userId', modifyMatch);
router.delete('/matches/:userId', deleteMatch);

router.get('/events', getEvents);
router.post('/events', setEvent);
router.put('/events/:eventId/:userId', modifyEvent);
router.delete('/events/:eventId/:userId', deleteEvent);

// TO-DO: Chat/Websockets

export default router;
