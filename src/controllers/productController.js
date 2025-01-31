const productModel = require('../models/productModel');

async function createProduct(req, res) {
  const { name, description, price, stock } = req.body;
  try {
    await productModel.createProduct(name, description, price, stock);
    res.status(201).send('Product created');
  } catch (error) {
    res.status(500).send('Error creating product');
  }
}

async function getProducts(req, res) {
  const products = await productModel.getAllProducts();
  res.json(products);
}

async function getProductById(req, res) {
  const { id } = req.params;
  const product = await productModel.getProductById(id);
  
  if (product) {
    res.json(product);
  } else {
    res.status(404).send('Product not found');
  }
}

async function updateProduct(req, res) {
  const { id } = req.params;
  const { name, description, price, stock } = req.body;
  try {
    await productModel.updateProduct(id, name, description, price, stock);
    res.send('Product updated');
  } catch (error) {
    res.status(500).send('Error updating product');
  }
}

async function deleteProduct(req, res) {
  const { id } = req.params;
  try {
    await productModel.deleteProduct(id);
    res.send('Product deleted');
  } catch (error) {
    res.status(500).send('Error deleting product');
  }
}

module.exports = { createProduct, getProducts, getProductById, updateProduct, deleteProduct };
