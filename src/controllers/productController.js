
const productModel = require('../models/productModel');

exports.createProduct = async(req, res) =>{
  const { name, description, price, stock } = req.body;
  try {
     await productModel.createProduct(name, description, price, stock);
    
    res.status(201).json({message: "Product created successfully"});

  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ error: 'Error creating product' });
  }
}

exports.getProducts = async (req, res) =>{
  const products = await productModel.getAllProducts();
  res.json(products);
}

exports.getProductById = async  (req, res) =>{
  const { id } = req.params;
  const product = await productModel.getProductById(id);
  
  if (product) {
    res.json(product);
  } else {
    res.status(404).send('Product not found');
  }
}

exports.updateProduct = async (req, res)=> {
  const { id } = req.params;
  const { name, description, price, stock } = req.body;
  try {
    await productModel.updateProduct(id, name, description, price, stock);
    res.send('Product updated');
  } catch (error) {
    res.status(500).send('Error updating product');
  }
}

exports.deleteProduct = async (req, res)=> {
  const { id } = req.params;
  try {
    await productModel.deleteProduct(id);
    res.send('Product deleted');
  } catch (error) {
    res.status(500).send('Error deleting product');
  }
}


