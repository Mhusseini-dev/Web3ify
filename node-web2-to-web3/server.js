const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve a simple HTML page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
