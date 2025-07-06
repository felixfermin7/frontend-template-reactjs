const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables
const app = express();
const PORT = process.env.PORT || 3000; // Use PORT from environment variables or default to 3000

// Middleware to parse JSON requests

app.use(cors({ origin: 'http://localhost:3000' })); // Replace with your frontend's origin

// Mock data
const mockData = [
  { id: 1, title: 'Item 1', description: 'Description for Item 1' },
  { id: 2, title: 'Item 2', description: 'Description for Item 2' },
  { id: 3, title: 'Item 3', description: 'Description for Item 3' },
];

// Endpoint to fetch mock data
app.get('/api/data', (req, res) => {
  console.log('data requested work');
  res.json(mockData);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});