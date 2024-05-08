// core/useCases/productUseCases.js

const Product = require('../entities/Product');
const productRepository = require('../../data/repositories/productRepository');

async function getAllProducts() {
  // Call the repository method to fetch all products
  const productData = await productRepository.getAll();

  // Map product data to Product entities
  const products = productData.map(({ title, image, price, origin, size, type }) => 
    new Product(title, image, price, origin, size, type)
  );
  return products;
}

module.exports = {
  getAllProducts,
};
