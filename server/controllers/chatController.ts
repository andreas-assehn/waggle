import { Request, Response } from 'express';
import Chat from '../models/chatModel';
import User from '../models/userModel';
import { matchedChats } from '../utils/algorithm/algorithm';

export const createChat = async (req: Request, res: Response) => {
  try {
    console.log(req.body.roomId);
    const newChatRoom = await Chat.create({
      roomId: req.body.roomId,
      message: [],
    });
    res.status(200).send(newChatRoom);
  } catch (e) {
    if (typeof e === 'string') {
      console.log(e);
    } else if (e instanceof Error) {
      console.log(e.message);
    }
    res
      .status(500)
      .send(
        'chatController: createChat could not create a new chat in the database'
      );
  }
};

export const getOwnChats = async (req: Request, res: Response) => {
  const userId = req.params.userId;
  try {
    const currentUser = await User.findOne({ userId });
    const chats = await Chat.find();
    const filteredChats = matchedChats(currentUser!, chats);
    res.status(200).send(filteredChats);
  } catch (e) {
    if (typeof e === 'string') {
      console.log(e);
    } else if (e instanceof Error) {
      console.log(e.message);
    }
    res
      .status(500)
      .send('chatController: could not fetch your chats in the database');
  }
};

export const getRoomChat = async (req: Request, res: Response) => {
  const roomId = req.params.roomId;
  try {
    const chatRoom = await Chat.findOne({ roomId });
    res.status(200).send(chatRoom);
  } catch (e) {
    if (typeof e === 'string') {
      console.log(e);
    } else if (e instanceof Error) {
      console.log(e.message);
    }
    res
      .status(500)
      .send('chatController: could not fetch your chat room from the database');
  }
};

export const addChatMessage = async (req: Request, res: Response) => {
  const roomId = req.params.roomId;
  console.log({ req: req.body });
  try {
    const chatRoom = await Chat.find({ roomId });
    console.log({ chatRoom });
    // chatRoom.messages.push(req.body)
    // const updatedUser = await modifiedUser?.save(); // modifiedUser?.swipeNo?.push(req.body.swipedUserId);
    res.status(200).send(chatRoom);
  } catch (e) {
    if (typeof e === 'string') {
      console.log(e);
    } else if (e instanceof Error) {
      console.log(e.message);
    }
    res
      .status(500)
      .send(
        `userController: modifyUser could not modify user with id ${roomId}`
      );
  }
};
