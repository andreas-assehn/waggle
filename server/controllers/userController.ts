import { Request, Response } from 'express';
import User from '../models/userModel';
import { sortWaggles, matchedWaggles } from '../utils/algorithm/algorithm';

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (e) {
    if (typeof e === 'string') {
      console.log(e);
    } else if (e instanceof Error) {
      console.log(e.message);
    }
    res
      .status(500)
      .send('userController: getUsers could not query users from database');
  }
};
export const getOneUser = async (req: Request, res: Response) => {
  const userId = req.params.userId;
  try {
    const oneUser = await User.findOne({ userId });
    res.status(200).send(oneUser);
  } catch (e) {
    if (typeof e === 'string') {
      console.log(e);
    } else if (e instanceof Error) {
      console.log(e.message);
    }
    res
      .status(500)
      .send(
        `userController: getOneUser could not query user with id: ${userId} from database`
      );
  }
};
export const setUser = async (req: Request, res: Response) => {
  try {
    const newUser = await User.create(req.body);
    res.status(200).send(newUser);
  } catch (e) {
    if (typeof e === 'string') {
      console.log(e);
    } else if (e instanceof Error) {
      console.log(e.message);
    }
    res
      .status(500)
      .send(
        'userController: setUser could not create a new user in the database'
      );
  }
};
export const addUserSwipeNo = async (req: Request, res: Response) => {
  const urlId = req.params.userId;
  try {
    const modifiedUser = await User.findById(urlId);
    modifiedUser?.swipeNo?.push(req.body.swipedUserId);
    const updatedUser = await modifiedUser?.save();
    res.status(200).send(updatedUser);
  } catch (e) {
    if (typeof e === 'string') {
      console.log(e);
    } else if (e instanceof Error) {
      console.log(e.message);
    }
    res
      .status(500)
      .send(
        `userController: modifyUser could not modify user with id ${urlId}`
      );
  }
};
export const addUserSwipeYes = async (req: Request, res: Response) => {
  const urlId = req.params.userId;
  try {
    const modifiedUser = await User.findById(urlId);
    modifiedUser?.swipeYes?.push(req.body.swipedUserId);
    const updatedUser = await modifiedUser?.save();

    const swipedUser = await User.findOne({ userId: req.body.swipedUserId });
    if (swipedUser?.swipeYes?.includes(updatedUser?.userId!)) {
      swipedUser.matches?.push(updatedUser?.userId!);
      updatedUser?.matches?.push(req.body.swipedUserId);
      const currentUser = await updatedUser?.save();
      const updatedOtherUser = await swipedUser?.save();
      return res.status(200).send(currentUser);
    }
    return res.status(200).send(updatedUser);
  } catch (e) {
    if (typeof e === 'string') {
      console.log(e);
    } else if (e instanceof Error) {
      console.log(e.message);
    }
    res
      .status(500)
      .send(
        `userController: modifyUser could not modify user with id ${urlId}`
      );
  }
};

export const modifyUser = async (req: Request, res: Response) => {
  const urlId = req.params.userId;
  try {
    const modifiedUser = await User.findByIdAndUpdate(urlId, req.body);
    res.status(200).send(modifiedUser);
  } catch (e) {
    if (typeof e === 'string') {
      console.log(e);
    } else if (e instanceof Error) {
      console.log(e.message);
    }
    res
      .status(500)
      .send(
        `userController: modifyUser could not modify user with id ${urlId}`
      );
  }
};
export const deleteUser = async (req: Request, res: Response) => {
  const urlId = req.params.userId;
  try {
    const deletedUser = await User.findByIdAndDelete(urlId);
    res.status(200).send(deletedUser);
  } catch (e) {
    if (typeof e === 'string') {
      console.log(e);
    } else if (e instanceof Error) {
      console.log(e.message);
    }
    res
      .status(500)
      .send(
        `userController: deleteUser could not delete user with id ${urlId}`
      );
  }
};

export const getMatchedUsers = async (req: Request, res: Response) => {
  const userId = req.params.userId;
  try {
    const currentUser = await User.findOne({ userId });
    const users = await User.find();
    const filteredUsers = matchedWaggles(currentUser!, users);
    res.status(200).send(filteredUsers);
  } catch (e) {
    if (typeof e === 'string') {
      console.log(e);
    } else if (e instanceof Error) {
      console.log(e.message);
    }
    res
      .status(500)
      .send('userController: getUsers could not query users from database');
  }
};

// get req for match check

export const getUnSwipedUsers = async (req: Request, res: Response) => {
  const userId = req.params.userId;
  try {
    const currentUser = await User.findOne({ userId });
    const allUsers = await User.find();
    const filteredUsers = sortWaggles(currentUser!, allUsers);
    res.status(200).send(filteredUsers);
  } catch (e) {
    if (typeof e === 'string') {
      console.log(e);
    } else if (e instanceof Error) {
      console.log(e.message);
    }
    res
      .status(500)
      .send('userController: getUsers could not query users from database');
  }
};
