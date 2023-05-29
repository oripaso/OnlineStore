// models/Product.js
const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  // Other product attributes
});

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;

// Repeat the above for Customer and Supplier models
