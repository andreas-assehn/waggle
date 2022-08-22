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
    console.log(filteredChats);
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
