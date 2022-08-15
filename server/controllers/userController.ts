import { Request, Response } from 'express';
import User from '../models/userModel';

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
  const urlId = req.params.userId;
  try {
    const oneUser = await User.findById(urlId);
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
        `userController: getOneUser could not query user with id: ${urlId} from database`
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
