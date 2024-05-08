// server.js

const express = require('express');
const productRoutes = require('./routes/productRoutes');

const app = express();
const port = 3000;

// Use product routes
app.use('/', productRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
