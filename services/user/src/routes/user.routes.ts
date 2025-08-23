import express from 'express';
import userController from '../controllers/user.controller';
// import authorization from '../middlewares/authorization';
import isActivated from '../middlewares/isActivated';
import upload from '../services/upload.service';

const router = express.Router();

// Apply authorization middleware to all routes
// router.use(authorization);

// User Profile Routes
router.get('/profile', userController.profile);
router.get(
  '/profile/:userId',

  isActivated,
  userController.getOneProfile,
);

// User Update & Deletion
router.put(
  '/:userId',
  isActivated,
  upload.single('image'),
  (req, res, next) => {
    console.log('Headers:', req.headers);
    console.log('Body:', req.body);
    console.log('File:', req.file); // <- check this
    next();
  },
  userController.update,
);
router.delete('/:userId', isActivated, userController.delete);

// User Search
router.post('/search', isActivated, userController.userSearch);

export default router;
