import { Router } from 'express';
import mapper from 'object-mapper';
import passport from 'passport';

import Application from '../models/application';
import ApplicationMap from '../models/application.map';


export default({ config, db, passport }) => {
  let api = Router();

  // CRUD operations

  // /v1/applications/add - CREATE
  api.post('/add', passport.authenticate('jwt', { session: false }), (req, res) => {
    let newApplication = new Application(mapper(req.body, ApplicationMap));

    newApplication.save((err, application) => {
      if (err)
        res.json(err);

      res.status(201).send(application);
    });
  });

  // /v1/applications/ - READ ALL
  api.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    Application.find({}, (err, applications) => {
      if (err)
        res.json(err);

      res.status(201).send(applications);
    });
  });

  // /v1/applications/:id - READ ONE
  api.get('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    Application.find({_id:req.params.id}, (err, application) => {
      if (err)
        res.json(err);

      res.status(201).send(application);
    });
  });

  // /v1/applications/:id - UPDATE
  api.put('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    Application.update(req.params.id,
      {
        $set: mapper(req.body, ApplicationMap)
      }, (err, affected) => {
        if (err)
          res.json(err);

        res.status(200).send({message: `${affected.nModified} rows affected`});
      });
  });

  // /v1/applications/:id - DELETE
  // TODO: Change the action to archive instead of remove.
  api.delete('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    Application.remove({_id:req.params.id}, (err, affected) => {
      if (err)
        res.json(err);

      res.status(200).send({message: `${affected.n} rows affected`});
    });
  });


  return api;
};
