import { Request, Response, NextFunction } from 'express';
import tokenService from '../services/token.service';

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

function authorization(req: Request, res: Response, next: NextFunction) {
  try {
    const authorization = req.headers.authorization;
    // console.log(authorization, 'auth');

    if (!authorization || typeof authorization !== 'string') {
      console.error("token error");
      
      res.status(400).json({ message: 'Authorization header is missing or invalid' });
      return;
    }

    const parts = authorization.split(' ');
    if (parts.length !== 2 || parts[0] !== 'Bearer') {
      console.error("token type error");

      res.status(400).json({ message: 'Authorization format is invalid' });
      return;
    }

    const accessToken = parts[1];
    if (!accessToken) {
      console.error("token split result empty");

      res.status(400).json({ message: 'Authorization token is missing' });
      return;
    }

    const tokenResult = tokenService.verifyToken(accessToken, 'access');

    // console.log(tokenResult, 'token result');

    if (!tokenResult) {
      console.error("verified token error");

      res.status(401).json({ message: 'Authorization token is not valid' });
      return;
    }

    req.user = { ...tokenResult };

    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An internal error occurred' });
    return;
  }
}

export default authorization;
