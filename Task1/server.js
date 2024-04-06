const express = require('express');
const app = express();
const port = 3000;

// Route to handle all incoming requests
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
