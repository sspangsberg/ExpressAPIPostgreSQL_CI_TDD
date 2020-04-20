import express from 'express';
import { APP_NAME } from '../settings';

const indexRouter = express.Router();

indexRouter.get('/', (req, res) => res.status(200).json({ message: APP_NAME }));

export default indexRouter;
