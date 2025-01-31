const knexConfig = require('../../knexfile').development;


const knex = require('knex')(knexConfig);

async function createProduct(name, description, price, stock) {
    try {
      return knex('products').insert({ name, description, price, stock });
    } catch (error) {
      console.error('Error in productModel.createProduct:', error);  // Log error if any
      throw error; 
    }
  }

async function getAllProducts() {
  return knex('products').select('*');
}

async function getProductById(id) {
  return knex('products').where({ id }).first();
}

async function updateProduct(id, name, description, price, stock) {
  return knex('products').where({ id }).update({ name, description, price, stock });
}

async function deleteProduct(id) {
  return knex('products').where({ id }).del();
}

module.exports = { createProduct, getAllProducts, getProductById, updateProduct, deleteProduct };
