import express, { Request, Response, NextFunction } from 'express';
import userService from '../services/user.services';
import { uploadFile } from '../services/file.service';
import { MessageFileType } from '../utils/type';

// interface AuthenticatedRequest extends Request {
//   user: { id: string };
//   file?: Express.Multer.File;
// }

class UserController {
  async profile(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      const userId = req.user?.id;
      const { user } = await userService.profile(userId);

      res.status(201).json(user);
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }

  async update(req: Request, res: express.Response, next: express.NextFunction) {
    console.log('Update process started');
    try {
      const userId = req.user?.id;
      const file = req.file;

      let fileUrl;
      if (file) {
        fileUrl = await uploadFile(MessageFileType['Image'], file);
      }

      const updatedUser = {
        ...req.body,
        ...(fileUrl ? { image: fileUrl } : {}),
      };

      console.log(updatedUser, 'user update');

      console.log(updatedUser, 'User update payload');

      if (!req.user) return;

      const { user } = await userService.update(req.user, updatedUser);
      res.status(201).json(user);
    } catch (error: any) {
      console.error('Update error:', error);
      res.status(400).json({ message: error.message });
    }
  }

  async delete(req: Request, res: express.Response, next: express.NextFunction) {
    try {
      const userId = req.user?.id;
      const { user } = await userService.delete(userId);
      res.status(201).json({ user, message: 'User successfully deleted' });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  async userSearch(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ): Promise<any> {
    try {
      const query = req.body.query;
      console.log(query, 'query');

      // if (Object.keys(query).length === 0) throw new Error('missing query');

      const { users } = await userService.userSearch(query);

      if (!users || users.length <= 0) {
        return res.status(400).json({ message: 'User not found' });
      }

      res.status(200).json(users);
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }

  async getOneProfile(req: Request, res: express.Response, next: express.NextFunction) {
    try {
      const myUserId = req.user?.id;
      const { userId } = req.params;
      const { user } = await userService.getOneProfile(myUserId, userId);

      res.status(200).json(user);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }
}

export default new UserController();
