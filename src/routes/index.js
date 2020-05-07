import express from 'express';
import { indexPage } from '../controllers/home';
import { contactPage } from '../controllers/contact';

const router = express.Router();

router.get('/', indexPage);
router.get('/contactus', contactPage);

export default router;
