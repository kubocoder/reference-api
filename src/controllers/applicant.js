import { Router } from 'express';
import mapper from 'object-mapper';

import Applicant from '../models/applicant';
import ApplicantMap from '../models/applicant.map';


export default({config, db}) => {
  let api = Router();

  // CRUD operations

  // /v1/applicants/add  - CREATE
  api.post('/add', (req, res) => {
    let newApplicant = new Applicant(mapper(req.body, ApplicantMap));

    newApplicant.save((err, applicant) => {
      if (err)
        res.json(err);

      res.status(201).send(applicant);
    });
  });

  // /v1/applicants/ -  READ ALL
  api.get('/', (req, res) => {
    Applicant.find({}, (err, applicant) => {
      if (err)
        res.json(err);

      res.status(201).send(applicant);
    });
  });

  //  /v1/applicants/:id  - READ ONE
  api.get('/:id', (req, res) => {
    Applicant.find({_id:req.params.id}, (err, applicant) => {
      if (err)
        res.json(err);

      res.status(201).send(applicant);
    });
  });

  // /v1/applicant/:id  - UPDATE
  api.put('/:id', (req, res) => {
    Applicant.update(req.params.id,
      {
        $set: mapper(req.body, ApplicantMap)
      }, (err, affected) => {
        if (err)
          res.json(err);

        res.status(200).send({message: `${affected.nModified} rows affected`});
      });
  });

  //  /v1/applicant/:id - DELETE
  api.delete('/:id', (req, res) => {
    Applicant.remove({_id:req.params.id}, (err, affected) => {
      if (err)
        res.json(err);

      res.status(200).send({message: `${affected.n} rows affected`});
    });
  });


  return api;
};
