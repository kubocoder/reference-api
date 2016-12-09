import { Router } from 'express';
import mapper from 'object-mapper';

import Application from '../models/application';
import ApplicationMap from '../models/application.map';

export default({ config, db }) => {
  let api = Router();

  // /v1/applications
  api.get('/', (req, res) => {
    res.json({message: "Ok Root."});
  });

  // /v1/applications/add
  api.post('/add', (req, res) => {
    let newApplication = new Application(mapper(req.body, ApplicationMap));

    newApplication.save((err, application) => {
      if (err) {
        res.json(err);
        //res.status(403).send({message: err.message});
      }
      else {
        res.status(201).send(application);
      }

    });
  });

  return api;
}
