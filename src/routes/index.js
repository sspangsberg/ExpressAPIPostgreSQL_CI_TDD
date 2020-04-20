<<<<<<< Updated upstream
var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
  return res.status(200).json({ message: 'Welcome to Express API template' });
});
module.exports = router;
=======
import express from 'express';
import { APP_NAME } from '../settings';

const indexRouter = express.Router();

indexRouter.get('/', (req, res) => res.status(200).json({ message: APP_NAME }));

export default indexRouter;
>>>>>>> Stashed changes
