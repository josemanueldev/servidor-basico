import express from 'express';
import {
  getRouter,
  getRouterById,
  postRouter,
  putRouter,
  deleteRouter,
} from '../controllers/app.js';

export const router = express.Router();

router.get('/info', getRouter);
router.get('/info/:id', getRouterById);
router.post('/info', postRouter);
router.put('/info/:id', putRouter);
router.delete('/info/:id', deleteRouter);
