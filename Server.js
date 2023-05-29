//server.js

const express = require('express');
const app = express();

// Set up middleware, routes, and other configurations

// Start the server

const port = 3000;
app.listen(port,()=>{
    console.log('Server running on port ${port}');
});