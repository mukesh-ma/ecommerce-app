const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/ecommerce', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("MongoDB connection error", err));

app.get('/', (req, res) => {
  res.send('Welcome to the eCommerce App');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
