const User = require('../models/user');
const bcrypt = require('bcrypt');
const generateToken = require('../helpers/jwt-helper');

const userRegistration = async (req, res) => {
  const { email, password, password2, firstName, lastName } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }
    // Validate password match
    if (password !== password2) {
      return res.status(400).json({
        status: 'FAILURE',
        message: 'Password and Re-type password do not match',
      });
    }
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      email,
      password: hashedPassword,
      firstName,
      lastName,
    });
    res.status(201).json({
      status: 'SUCCESS',
      message: 'User registered successfully',
      data: user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 'FAILURE',
      message: 'Error registering user',
      error: error.message,
    });
  }
};

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ status: 'FAILURE', message: 'Invalid credentials' });
    }
    // compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(400)
        .json({ status: 'FAILURE', message: 'Password does not match' });
    }
    // Generate token
    const token = generateToken(user);
    res
      .status(200)
      .json({ status: 'SUCCESS', token, message: 'Successfully logged in' });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 'FAILURE',
      message: 'Error Logging in',
      error: error.message,
    });
  }
};

module.exports = {
  userRegistration,
  userLogin,
};
