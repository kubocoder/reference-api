import { Router } from 'express';

import Application from '../models/application';

export default({ config, db }) => {
  let api = Router();

  // /v1/application
  api.get('/', (req, res) => {
    res.json({message: "Ok Root."});
  });

  // /v1/applications/add
  api.post('/add', (req, res) => {
    let newApplication = new Application({
      entryLevel: req.body.entryLevel,
      term: req.body.term,
      program: req.body.program,
      givenName: req.body.givenName,
      lastName: req.body.lastName,
      middleName: req.body.middleName,
      birthday: req.body.birthday,
      gender: req.body.gender,
      address: req.body.address,
      email: req.body.email,
      cellphone: req.body.cellphone,
      homePhone: req.body.homePhone,
      academicHistory: req.body.academicHistory,
      termsAgreed: req.body.termsAgreed,
      honestyDeclared: req.body.honestyDeclared
    });

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
