

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');

exports.register = async (req, res) => {
    const { name, email, password } = req.body;
    
    try {
   const newUser=   await userModel.createUser(name, email, password);
      res.status(201).json({message : "user register successfully"});
    } catch (error) {
      console.error('Error during registration:', error,result);
      res.status(500).send('Error registering user');
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    const user = await userModel.getUserByEmail(email);
    
    if (user && await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({ userId: user.id }, 'your-secret-key', { expiresIn: '1h' });
        res.json({ token });
    } else {
        res.status(400).send('Invalid credentials');
    }
};
