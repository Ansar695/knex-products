const express = require('express');
const productController = require('../controllers/productController');
const { authenticateToken } = require('../middleware/authenticateToken');
const router = express.Router();

router.post('/products', authenticateToken, productController.createProduct);  
router.get('/products', productController.getProducts);  
router.get('/products/:id', productController.getProductById);  
router.put('/products/:id', authenticateToken, productController.updateProduct);  
router.delete('/products/:id', authenticateToken, productController.deleteProduct);
module.exports = router;
