const express = require('express');
const bodyParser = require('body-parser');
const {testDatabaseConnection} = require('./src/config/config');
const usersRoutes = require('./src/routes/usersRoutes');
const customerRoutes = require('./src/routes/customerRoutes');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Routes
app.use('/users', usersRoutes);
app.use('/customers', customerRoutes);

testDatabaseConnection();
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

