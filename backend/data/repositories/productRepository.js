// data/repositories/productRepository.js

const fs = require('fs');
const path = require('path');

// Path to products JSON file
const productsFilePath = path.join(__dirname, "..", 'products.json');

// Repository method to fetch all products
async function getAll() {
  // Read product data from JSON file
  const productsData = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
  return productsData;
}

module.exports = {
  getAll,
};
