import { Request, Response } from 'express';
import Matches from '../models/matchesModel';

export const getMatches = async (req: Request, res: Response) => {
  try {
    const matches = await Matches.find();
    res.status(200).send(matches);
  } catch (e) {
    if (typeof e === 'string') {
      console.log(e);
    } else if (e instanceof Error) {
      console.log(e.message);
    }
    res
      .status(500)
      .send(
        'matchController: getMatches could not query matches from database'
      );
  }
};
export const setMatch = async (req: Request, res: Response) => {
  try {
    const newMatch = await Matches.create(req.body);
    res.status(200).send(newMatch);
  } catch (e) {
    if (typeof e === 'string') {
      console.log(e);
    } else if (e instanceof Error) {
      console.log(e.message);
    }
    res
      .status(500)
      .send(
        'matchController: setMatch could not create a new match in the database'
      );
  }
};
export const modifyMatch = async (req: Request, res: Response) => {
  const urlId = req.params.userId;
  try {
    const modifiedMatch = await Matches.findByIdAndUpdate(urlId, req.body);
    res.status(200).send(modifiedMatch);
  } catch (e) {
    if (typeof e === 'string') {
      console.log(e);
    } else if (e instanceof Error) {
      console.log(e.message);
    }
    res
      .status(500)
      .send(
        `matchController: modifyMatch could not modify match with id ${urlId}`
      );
  }
};
export const deleteMatch = async (req: Request, res: Response) => {
  const urlId = req.params.userId;
  try {
    const deletedMatch = await Matches.findByIdAndDelete(urlId);
    res.status(200).send(deletedMatch);
  } catch (e) {
    if (typeof e === 'string') {
      console.log(e);
    } else if (e instanceof Error) {
      console.log(e.message);
    }
    res
      .status(500)
      .send(
        `matchController: deleteMatch could not delete match with id ${urlId}`
      );
  }
};
