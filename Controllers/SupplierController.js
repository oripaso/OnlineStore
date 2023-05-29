const Supplier = require('../models/Supplier');

// Handle supplier create form on POST
exports.createSupplier = function (req, res) {
  // Extract the supplier data from the request body
  const { name, contactPerson, address } = req.body;

  // Create a new Supplier object
  const supplier = new Supplier({
    name: name,
    contactPerson: contactPerson,
    address: address,
  });

  // Save the supplier to the database
  supplier.save(function (err) {
    if (err) {
      console.log(err);
      // Handle the error appropriately
      return;
    }
    // Redirect to the supplier list page after successful creation
    res.redirect('/suppliers');
  });
};

// Display list of all suppliers
exports.supplierList = function (req, res) {
  // Fetch all suppliers from the database
  Supplier.find({}, function (err, suppliers) {
    if (err) {
      console.log(err);
      // Handle the error appropriately
      return;
    }
    // Render the supplier list view with the fetched suppliers data
    res.render('suppliers/list', { suppliers: suppliers });
  });
};

// Handle supplier update form on POST
exports.updateSupplier = function (req, res) {
  // Extract the supplier data from the request body
  const { name, contactPerson, address } = req.body;

  // Find the supplier by its ID and update the fields
  Supplier.findByIdAndUpdate(
    req.params.id,
    { name: name, contactPerson: contactPerson, address: address },
    function (err, updatedSupplier) {
      if (err) {
        console.log(err);
        // Handle the error appropriately
        return;
      }
      // Redirect to the supplier list page after successful update
      res.redirect('/suppliers');
    }
  );
};
