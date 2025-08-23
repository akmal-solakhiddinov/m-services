import { NextFunction, Request, Response } from 'express';
import userServices from '../services/user.services';
import { User } from '../utils/type';
declare module 'express-serve-static-core' {
  interface Request {
    user?: {
      id: string;
      email: string;
      fullName: string;
    };
    file?: Express.Multer.File;
  }
}
async function isActivated(req: Request, res: Response, next: NextFunction) {
  const userId = req?.user?.id;
  const { user } = await userServices.profile(userId);
  console.log(user);
  if (!user.isActivated)
    res.status(400).json({ message: 'User has not been activated, Please activate your account' });

  req.user = {
    id: user.id,
    email: user.email,
    fullName: user?.fullName || '',
  };
  next();
}

export default isActivated;
