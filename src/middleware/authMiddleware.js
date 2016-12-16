import jwt from 'jsonwebtoken';
import expressJwt from 'express-jwt';

const TOKEN_TIME = 60 * 60 * 24 * 30; // 30 Days
const SECRET = "0KWJ@=kz]PxF*8U";

let authenticate = expressJwt({ secret: SECRET });
let generateAccessToken = (req, res, next) => {
  req.token = req.token || {};
  req.token = jwt.sign({
    id: req.user.id
  }, SECRET, {
    expiresIn: TOKEN_TIME
  });
  next();
};

let respond = (req, res) => {
  res.status(200).json({
    user: req.user.username,
    token: req.token
  });
};

module.exports = {
  authenticate,
  generateAccessToken,
  respond
}
