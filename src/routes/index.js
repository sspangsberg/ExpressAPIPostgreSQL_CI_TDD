import express from 'express';
import { indexPage } from '../controllers/home';
import { contactPage } from '../controllers/contact';

const indexRouter = express.Router();

indexRouter.get('/', indexPage);
indexRouter.get('/contactus', contactPage);

export default indexRouter;
