import express from 'express';

import config from '../config';
import initializeDb from '../db';
import middleware from '../middleware';
import application from '../controllers/application';
import applicant from '../controllers/applicant';


let router = express();

initializeDb(db => {
  // Middleware
  router.use(middleware({ config, db }));

  // Forward to controllers
  router.use('/applications', application({ config, db }));
  router.use('/applicants', applicant({config, db}));
});

export default router;
