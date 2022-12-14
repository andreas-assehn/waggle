import { Request, Response } from 'express';
import Event from '../models/eventsModel';
import User from '../models/userModel';
import { eventsInArea } from '../utils/algorithm/helperFunctions';

export const getEvents = async (req: Request, res: Response) => {
  const userId = req.params.userId;
  try {
    const currentUser = await User.findOne({ userId });
    const allEvents = await Event.find();
    const filteredEvents = eventsInArea(currentUser!, allEvents);
    res.status(200).send(filteredEvents);
  } catch (e) {
    if (typeof e === 'string') {
      console.log(e);
    } else if (e instanceof Error) {
      console.log(e.message);
    }
    res
      .status(500)
      .send('eventController: getEvents could not query events from database');
  }
};
export const setEvent = async (req: Request, res: Response) => {
  try {
    const newEvent = await Event.create(req.body);
    res.status(200).send(newEvent);
  } catch (e) {
    if (typeof e === 'string') {
      console.log(e);
    } else if (e instanceof Error) {
      console.log(e.message);
    }
    res
      .status(500)
      .send(
        'eventController: setEvent could not create a new event in the database'
      );
  }
};
export const modifyEvent = async (req: Request, res: Response) => {
  try {
    const modifiedEvent = await Event.findByIdAndUpdate(req.body._id, req.body);
    res.status(200).send(modifiedEvent);
  } catch (e) {
    if (typeof e === 'string') {
      console.log(e);
    } else if (e instanceof Error) {
      console.log(e.message);
    }
    res
      .status(500)
      .send(
        `eventController: modifyEvent could not modify event with id ${req.body._id.$oid}`
      );
  }
};
export const deleteEvent = async (req: Request, res: Response) => {
  try {
    const deletedEvent = await Event.findByIdAndDelete(req.body);
    res.status(200).send(deletedEvent);
  } catch (e) {
    if (typeof e === 'string') {
      console.log(e);
    } else if (e instanceof Error) {
      console.log(e.message);
    }
    res
      .status(500)
      .send(
        `eventController: deleteEvent could not delete event with id ${req.body}`
      );
  }
};
