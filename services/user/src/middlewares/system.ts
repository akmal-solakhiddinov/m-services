/* import { NextFunction, Request, Response } from 'express';
import tokenService from '../services/token.service';
import userServise from '../services/user.services';
import { getIO } from '../';

function system(req:Request, res:Response, next:NextFunction) {
  const io = getIO();

  const header = req.headers.authorization;
  if (!header) return next();

  const auth = header.split(' ')[1];
  const { user } = tokenService.verifyToken(auth, 'access');

  if (user.id) {
    io.on('connection', async (socket) => {
      console.log('Socket is initialazied');
      const status = await userServise.update(user.id, { status: 'online' });
    });

    io.on('disconnection', async (socket) => {
      console.log('Socket is initialazied');
      const status = await userServise.update(user.id, { status: 'offline' });
    });
  }

  return next();
}

module.exports = system;
 */