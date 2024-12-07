const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Initialize Express
const app = express();
const port = 3000;

// Enable CORS for all origins

// Connect to MongoDB locally (default port is 27017)
mongoose
  .connect('mongodb://localhost:27017/mp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB locally'))
  .catch((err) => console.error('Error connecting to MongoDB:', err.message));

// Define Schema and Model for the 'rest' collection
const restSchema = new mongoose.Schema({}, { strict: false }); // Flexible schema
const Rest = mongoose.model('Rest', restSchema, 'rest'); // Use 'rest' as the collection name

// Endpoint to fetch all restaurants
app.get('/restaurants', async (req, res) => {
  try {
    const restaurants = await Rest.find({});
    res.json(restaurants); // Return the data as JSON
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
