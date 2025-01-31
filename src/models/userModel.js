
const knexConfig = require('../../knexfile').development;  
const knex = require('knex')(knexConfig);
const bcrypt = require('bcryptjs');

async function createUser(name, email, password) {
  const hashedPassword = await bcrypt.hash(password, 10);  
  try {
    return knex('users').insert({ name, email, password: hashedPassword }); 
  } catch (error) {
    console.error('Error in userModel.createUser:', error);  
    throw error;  
  }
}

async function getUserByEmail(email) {
  return knex('users').where({ email }).first();  
}

module.exports = { createUser, getUserByEmail };
