import express from 'express';
import { router } from './routes/app.js';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

const PORT = 5000;

mongoose.connect('mongodb://localhost/info');

const server = express();
server.use(bodyParser.json());
server.use(cors());
server.use(router);
server.listen(PORT, console.log(`Listening at port ${PORT}`));
