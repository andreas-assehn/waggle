import express from 'express';
const router = express.Router();

// Import controllers here

router.get('/users', getUsers);
router.get('/users/:userId', getOneUser);
router.post('/users/:userId', setUser);
router.put('/users/:userId', modifyUser);

router.put('/matches', getMatches);
router.post('/matches/:userId:', setMatch);
router.put('/matches/:userId', modifyMatch);

router.get('/events', getEvents);
router.post('/events/:userId', setEvent);
router.put('/events/:eventId/:userId', modifyEvent);

// TO-DO: Chat/Websockets

export default router;
