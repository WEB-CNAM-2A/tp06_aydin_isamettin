// controllers/productController.js

const productUseCases = require('../core/useCases/productUseCases');

async function getAllProducts(req, res, next) {
  try {
    // Call the corresponding use case to fetch all products
    const products = await productUseCases.getAllProducts();
    res.json(products);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAllProducts,
};
