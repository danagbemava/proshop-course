import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';
import asyncHandler from 'express-async-handler';

export const protect = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.decode(token, process.env.TOKEN_SECRET);

      console.log(decoded);

      req.user = await User.findById(decoded.id).select('-password');

      next();
    } catch (err) {
      console.error(err);
      res.status(401);
      throw new Error('Unauthorized');
    }
  }

  if (!token) {
    res.status(401);
    throw new Error('Unathorized');
  }
});
