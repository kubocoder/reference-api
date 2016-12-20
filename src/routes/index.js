import express from 'express';

import config from '../config';
import initializeDb from '../db';
import middleware from '../middleware';
import application from '../controllers/application';
import auth from '../controllers/auth';
import passport from 'passport';

let router = express();

initializeDb(db => {
  // Middleware
  router.use(middleware({ config, db }));

  // Forward to controllers
  router.use('/applications', application({ config, db, passport }));
  router.use('/auth', auth({ config, db, passport }));
});

export default router;
