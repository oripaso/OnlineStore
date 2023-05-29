const mongoose = require('mongoose');

const supplierSchema = new mongoose.Schema({
  name: String,
  contactPerson: String,
  address: String,
});

module.exports = mongoose.model('Supplier', supplierSchema);
