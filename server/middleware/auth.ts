import admin from '../utils/firebase-config/firebase-config';
import { Request, Response, NextFunction } from 'express';

const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeaders = req.headers['authorization'];
  if (!authHeaders) return res.sendStatus(403);
  const token = authHeaders.split(' ')[1];

  try {
    const decodeToken = await admin.auth().verifyIdToken(token);
    if (decodeToken) return next();
    return res.sendStatus(401);
  } catch (error) {
    console.log(error);
    res.sendStatus(401);
  }
};

export default authMiddleware;
