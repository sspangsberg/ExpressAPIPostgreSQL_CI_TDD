import express from 'express';
import { indexPage } from '../controllers/home';
import { contactPage } from '../controllers/contact';
import { aboutPage } from '../controllers/about';

const router = express.Router();

router.get('/', indexPage);
router.get('/about', aboutPage);
router.get('/contactus', contactPage);

export default router;
