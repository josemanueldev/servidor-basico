import express from 'express';
import { getRouter } from '../controllers/app.js';

export const router = express.Router();

router.get('/', getRouter);
