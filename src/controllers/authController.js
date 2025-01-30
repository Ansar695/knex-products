const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');

async function register(req, res) {
    const { name, email, password } = req.body;
    
    try {
      await userModel.createUser(name, email, password);
      res.status(201).send('User created');
    } catch (error) {
      console.error('Error during registration:', error);  // Log the error
      res.status(500).send('Error registering user');
    }
  }
  

async function login(req, res) {
  const { email, password } = req.body;
  const user = await userModel.getUserByEmail(email);
  
  if (user && await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ userId: user.id }, 'your-secret-key', { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(400).send('Invalid credentials');
  }
}

module.exports = { register, login };
