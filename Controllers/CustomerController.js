const Customer = require('../models/Customer');

// Handle customer create form on POST
exports.createCustomer = function (req, res) {
  // Extract the customer data from the request body
  const { name, email, address } = req.body;

  // Create a new Customer object
  const customer = new Customer({
    name: name,
    email: email,
    address: address,
  });

  // Save the customer to the database
  customer.save(function (err) {
    if (err) {
      console.log(err);
      // Handle the error appropriately
      return;
    }
    // Redirect to the customer list page after successful creation
    res.redirect('/customers');
  });
};

// Display list of all customers
exports.customerList = function (req, res) {
  // Fetch all customers from the database
  Customer.find({}, function (err, customers) {
    if (err) {
      console.log(err);
      // Handle the error appropriately
      return;
    }
    // Render the customer list view with the fetched customers data
    res.render('customers/list', { customers: customers });
  });
};

// Handle customer update form on POST
exports.updateCustomer = function (req, res) {
  // Extract the customer data from the request body
  const { name, email, address } = req.body;

  // Find the customer by its ID and update the fields
  Customer.findByIdAndUpdate(
    req.params.id,
    { name: name, email: email, address: address },
    function (err, updatedCustomer) {
      if (err) {
        console.log(err);
        // Handle the error appropriately
        return;
      }
      // Redirect to the customer list page after successful update
      res.redirect('/customers');
    }
  );
};

