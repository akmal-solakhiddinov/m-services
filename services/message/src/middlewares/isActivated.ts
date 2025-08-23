import { NextFunction, Request, Response } from 'express';
import tokenService from '../services/token.service';
// import userService from '../services/user.service';

async function isActivated(req: Request, res: Response, next: NextFunction) {
  const userId = req.user?.id;
  //   const { user } = await userService.profile(userId);

  const request = await fetch(`${process.env.USER_SERVICE_URL}/api/v-1/user/profile`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${req.headers.authorization?.split(' ')[1]}`,
    },
  });

  if (!request.ok) {
    res.status(401).json({ message: 'Token error ', error: request.statusText, url: request.url });
    return;
  }
  const response = await request.json();

  const  user  = response;

  if (!user) {
    res
      .status(400)
      .json({
        message: 'User is undefined',
      });
    return;
  }


  if (!user.isActivated) {
    res.status(400).json({ message: 'User has not been activated, Please activate your account' });
    return;
  }

  req.user = user;
  next();
}

export default isActivated;
