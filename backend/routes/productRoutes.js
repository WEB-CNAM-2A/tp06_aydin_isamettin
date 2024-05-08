// productRoutes.js

const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Define route to get all products
router.get('/products', productController.getAllProducts);

module.exports = router;
