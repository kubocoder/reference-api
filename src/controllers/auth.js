import { Router } from 'express';

export default({ config, db, passport }) => {
  let api = Router();
  
  // /auth/facebook
  api.post('/facebook', (req, res) => {
      
  });
  
  // /auth/facebook/callback
  api.get('/facebook/callback', (req, res) => {
      
  });
  
  return api;
}