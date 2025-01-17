require('dotenv').config();
const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY;

const generateToken = (user) => {
  return jwt.sign({ id: user._id, email: user.email }, SECRET_KEY, {
    expiresIn: '1h',
  });
};
module.exports = generateToken;
