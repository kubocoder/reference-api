import mongoose from 'mongoose';
import { Router } from 'express';
import bodyParser from 'body-parser';
import passport from 'passport';

import config from '../config';
import Account from '../models/account';

import { generateAccessToken, respond, authenticate } from '../middleware/authMiddleware';

export default ({config, db }) => {
  let api = Router();

  // /v1/account/register
  api.post('/register', (req, res) => {
    Account.register(new Account({username: req.body.username}, req.body.password, (err, account) => {
      if (err)
        res.send(err);

      passport.authenticate(
        'local', {
          session: false
        })(req, res, () => {
          res.status(200).send('Successfully created account');
        });
    }));
  });

  // /v1/account/login
  api.post('/login', passport.authenticate(
    'local', {
      session: false,
      scope: []
    }), generateAccessToken, respond);

  // /v1/account/logout
  api.get('/logout', (req, res) => {
    res.logout();
    res.status(200).send('Successfully logged out');
  });

  // /v1/account/me
  api.get('/me', authenticate, (req, res) => {
    res.status(200).send(req.user);
  })


  return api;
}
